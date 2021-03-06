import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./elements/navbar"
import Footer from "./elements/footer"
import NotificationBanner from "./elements/notification-banner"


const Layout = ({ children }) => {
  const data = useStaticQuery(globalQuery)
  const { navbar, footer, notificationBanner } = data.strapi.global
  
  const [bannerIsShown, setBannerIsShown] = useState(true)
  
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={() => setBannerIsShown(false)}
          />
        )}
        <Navbar navbar={navbar} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  )
}

export default Layout

const globalQuery = graphql`
  query GlobalQuery {
    strapi {
      global {
        footer {
          id
          columns {
            id
            links {
              id
              newTab
              text
              url
            }
            title
          }
          id
          logo {
            id
            mime
            alternativeText
            url
            id
            mime
            urlSharp {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          smallText
        }
        id
        metaTitleSuffix
        metadata {
          id
          metaDescription
          metaTitle
          twitterCardType
          twitterUsername
        }
        navbar {
          button {
            id
            newTab
            text
            type
            url
          }
          id
          links {
            url
            text
            newTab
            id
          }
          logo {
            id
            mime
            alternativeText
            url
            id
            mime
            urlSharp {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        notificationBanner {
          id
          text
          type
        }
      }
    }
  }
`
