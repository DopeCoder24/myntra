import Widthimgs from "../components/Widthimgs";
import { boximgdata, imgdata, secimgdata } from "../data/data";

const Homepage = () => {
  return (
    <div className="myntra-base">
      <div className="index-content">
        <img
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
          alt=""
        />
      </div>
      <h4 className="text-banner-title">MEDAL WORTHY BRANDS TO BAG</h4>
      <div className="index-content">
        {imgdata.map((currentdata) => (
          <Widthimgs img={currentdata.img} />
        ))}
      </div>
      <h4 className="text-banner-title">GRAND GLOBAL BRANDS</h4>
      <div className="index-content">
        {secimgdata.map((currentdata) => (
          <Widthimgs img={currentdata.img} />
        ))}
      </div>
      <h4 className="text-banner-title">SHOP BY CATEGORY</h4>
      <div className="box-content">
        {boximgdata.map((currentdata) => (
          <Widthimgs img={currentdata.img} />
        ))}
      </div>
    </div>
  );
};
export default Homepage;
