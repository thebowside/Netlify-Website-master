import { graphql, useStaticQuery } from "gatsby";

const SiteMetaData = () => {
  const {
    site: { siteMetadata },
    markdownRemark: { frontmatter },
  } = SiteData();
  return { ...siteMetadata, ...frontmatter };
};

const SiteData = () => {
  return useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          siteURL
        }
      }
      markdownRemark(frontmatter: { templateKey: { eq: "site-data" } }) {
        frontmatter {
          title
          youtube
          twitter
          facebook
          number
          dmca
          dmcaLink
          cookies {
            enabled
            message
          }
          colors {
            background
            blockBackground
            headerBackground
            textColor
            btnBackground
            btnHoverBackground
            btnColor
            navbarShadow
            headerTextColor
          }
          ads {
            enableAds
            disabledPostsAds
            adCodes {
              afterToC
              afterTitle
              insideBody
              sidebarSticky
              beforeAuthor
              stickyMobile
            }
          }
          logoSmall {
            base
            childImageSharp {
              original {
                height
                width
              }
            }
          }
          logoLarge {
            base
            childImageSharp {
              original {
                height
                width
              }
            }
          }
          faviconSmall {
            base
            childImageSharp {
              original {
                height
                width
              }
            }
          }
          faviconLarge {
            base
            childImageSharp {
              original {
                height
                width
              }
            }
          }
          topNav {
            title
            link
            child {
              title
              link
              child {
                title
                link
              }
            }
          }
          footerNav {
            title
            link
          }
        }
      }
    }
  `);
};

export default SiteMetaData;
