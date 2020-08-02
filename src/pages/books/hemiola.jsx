import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../../components/seo'
import Paragraph from '../../components/paragraph'

const Hemiola = ({ data }) => {
  return (
    <div className="m-5">
      <SEO title="Hemiola" />
      <div className="border-gray-700 rounded-md shadow-lg overflow-hidden">
        <Img fluid={data.cover.childImageSharp.fluid} />
      </div>
      <div className="p-3 pt-5">
        <h1 className="text-2xl font-bold">Hemiola</h1>
        <Paragraph>
          Micah Moore is young, handsome, and newly famous. Riding high from his
          recent success as the lead in a box office hit, the world is his
          oyster. To him every door is open, and there are no consequences he
          can’t charm his way out of.
        </Paragraph>
        <Paragraph>
          But after a drunken car crash lands him in the hospital, Micah and his
          twin sister, Melanie, are sent to live with their aunt in Kimball
          Junction, Utah, for the ultimate attitude adjustment.
        </Paragraph>
        <Paragraph>
          Micah is determined to hate everyone and everything in this tiny town,
          until he meets Navy Monroe, his talented, shy, and intelligent
          chemistry lab partner. But Navy doesn’t seem to care about his
          celebrity status, and something about her draws Micah in and has him
          falling fast for her. Micah is determined to hate everyone and
          everything in this tiny town, until he meets Navy Monroe, his
          talented, shy, and intelligent chemistry lab partner. But Navy doesn’t
          seem to care about his celebrity status, and something about her draws
          Micah in and has him falling fast for her.
        </Paragraph>
        <Paragraph>
          Thrown together in a small town and unlikely circumstances, Micah
          breaks down Navy’s walls and finds someone more beautiful, honest and
          intriguing than any girl he’s ever met. With a budding film career on
          the line, is falling for Navy too risky, or will he chase the love
          story that could change his life forever?
        </Paragraph>
        <Paragraph>
          For fans of clean and wholesome romance, a la Hallmark and Disney
          Channel Original Movies, Hemiola will remind you of the whirlwind of
          falling in love for the first time.
        </Paragraph>
      </div>
    </div>
  )
}

export default Hemiola

export const pageQuery = graphql`
  query {
    cover: file(relativePath: { eq: "hemiola-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
