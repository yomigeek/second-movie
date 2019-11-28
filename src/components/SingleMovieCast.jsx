import React, { Fragment } from 'react'

const SingleMovieCast = (props) => {
  const { castInfo, castList } = props;
  let characterImage;
  if (castList) {
    if (castInfo.character.image === null) {
      characterImage = 'https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1574964550/no-img_embffd.png';
    }
    else {
      characterImage = castInfo.character.image.medium;
    }
  }
  return (
    <Fragment>

        {
          castList 
          ? 
          <div className="col-md-3">
          <div className="team">
            <figure className="team-image">
              <img src={characterImage} alt="" />
            </figure>
            <h2 className="team-name">
              {
                castInfo.person.name
              }
            </h2>
            <small className="team-title">Character: {castInfo.character.name}</small>
            <div className="social-links">
              <div >
                Country: {castInfo.person.country.name}
              </div>
             
            </div>
          </div>
        </div>
          :
          <div className="cast-list">No Cast Available for this show!</div>
        }

    </Fragment>
  )
}
export default SingleMovieCast;
