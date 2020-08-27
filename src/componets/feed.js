const { Component } = wp.element;

export default class Feed extends Component {
  constructor(props) {
      super(...arguments);
      this.props = props;
      this.results = [];
      if ( this.props.results ) {
        this.results = this.props.results;
      }
  }

  render() {
      return (
          <div>
          {
            this.results.map(function(item, i){
              return (
                <div className="randomItem" key={i}>
                  { item.thumbnail !== "self" && item.thumbnail !== "" ? ( <img src={item.thumbnail} /> ) : ( <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7w8fTi5OnFydO+ws3f4ee6v8vY2+H29/jy9Pbu7/LJztbCx9HR1ty/NMEIAAACq0lEQVR42u3cYXaqMBBA4cyEgEAi4P4X+34oLSra9IA9E979FtDj7SAJUOocAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAqrQ3Y311iH5fsaktBTYn3d/Y2JljlM/orAR2IsdOHNqPFbY2TqKdXj/Orl/C24/sLHwV0ygiIv2466n0+kNlNFHYiohotfNyWKmIyKm2U9jsffqyU+gopLDMwiGE+sCFjRdV1SkOxyw8X2Rer6cNe2e7hfVJv3ddGg9YeNHlxrIPhyvs9GHvXB+sMJ2eLoDSsQrDwwhF/cFm+HiQikxvP+Prk63RwhSfCtt3i6J/fbK1Wlj9qvCiIjEd9yg9e32zZFotHPLPNOd55VyfotnVYsq9XVZ7fbvxsbviZx6kZ7+Y9toU7e7a/P1x+mI5qP3doRyLuraYlokxY4LrUzRcOPj56knaxmVMcP1XYfkKODW+VVWZqiHlTXBtisbvYgwhhKF22RNcmWLBd6JWJ/g8xXIL64u+eg5zl1huodfXj5riAQrPF333NG0xxVILvb5/YBhLKxzC8+XSD4mpqMLQt2F59hj158e+saDCFFrRacj9Dj5MsYTC0IuIfk9xzAoU7QopTKG93dq/7d3yJiiiVSqjMPTzJ25Dcu6cOUERjUUUzhP8mmLuBIsp/Jrg9Soq+OzAMgqXE7wm/uKvhIoovJ/gLxVQ+DTBwxVummABhRsnWEDhxgmaL9w8QfOFmydovTDlb11KLawopJBCCimk8E8Kbd+nGcJ2Q9F39fNRSKH5wtSZeyvI7/sm8O053MnCCOc/C/7Iu2vexIuyn3z/sLEQ6Orp4O+QOtf0HwrsGyOFrhP9QJ+qmUDnwtju/jp+PwZT/1chdNW+YuMAAAAAAAAAAAAAAAAAAAAAAAAAAACA/9s/LTI30XlcBHoAAAAASUVORK5CYII="/> ) }
                  <a href={item.url} target="_blank"><h4>{item.title}</h4></a>
                  <span>{item.ups}</span>
                </div>
              )
            })
          }
          </div>
      );
  }

}
  