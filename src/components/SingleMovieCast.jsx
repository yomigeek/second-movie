import React, { Fragment } from 'react'

const SingleMovieCast = (props) => {
  const { castInfo, castList } = props;
  let characterImage, castCountry;
  if (castList) {
    if (castInfo.character.image === null) {
      characterImage = 'https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1574964550/no-img_embffd.png';

    }
    if (castInfo.character.image === null) {
      castCountry = 'Not Available';
    }
    else {
      characterImage = castInfo.character.image.medium;
      castCountry = castInfo.person.country.name;
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
                  Country: {castCountry}
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
