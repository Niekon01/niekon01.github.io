import React from 'react';

import LanguageContainer from './LanguageContainer';

import './language.scss';

const index = () => {
  return (
    <div className="languages" id="lang">
      <div className="heading">My top languages</div>
      <div className="row-1">
        <LanguageContainer imgPath={'./img/java.png'} name={'Java'} />
        <LanguageContainer imgPath={'./img/python.png'} name={'Python'} />
        <LanguageContainer imgPath={'./img/cplusplus.png'} name={'C++'} />
      </div>
      <div className="row-2">
        <LanguageContainer imgPath={'./img/js.png'} name={'JavaScript'} />
        <LanguageContainer imgPath={'./img/php.png'} name={'PHP'} />
      </div>
      <svg
        className="svg-left"
        width="157"
        height="310"
        viewBox="0 0 157 310"
        fill="none"
      >
        <path
          d="M115.348 205.827C94.209 205.827 77.0727 188.69 77.0727 167.552C77.0727 146.413 94.209 129.276 115.348 129.276C136.486 129.276 153.623 146.413 153.623 167.552C153.623 188.69 136.486 205.827 115.348 205.827Z"
          fill="#99D590"
        />
        <path
          d="M117.599 309.394L115.348 167.552"
          stroke="#3F3D56"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M115.348 177.683C109.752 177.683 105.216 173.147 105.216 167.552C105.216 161.956 109.752 157.42 115.348 157.42C120.943 157.42 125.479 161.956 125.479 167.552C125.479 173.147 120.943 177.683 115.348 177.683Z"
          fill="#3F3D56"
        />
        <path
          d="M116.473 208.078C116.473 208.078 117.391 177.011 145.743 180.159L116.473 208.078Z"
          fill="#3F3D56"
        />
        <path
          d="M118.17 307.143C118.17 307.143 111.08 248.635 146.868 245.227"
          stroke="#3F3D56"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M146.868 255.359C141.273 255.359 136.737 250.823 136.737 245.227C136.737 239.632 141.273 235.096 146.868 235.096C152.464 235.096 157 239.632 157 245.227C157 250.823 152.464 255.359 146.868 255.359Z"
          fill="#3F3D56"
        />
        <path
          d="M45.5758 88.1508C69.691 88.1508 89.2402 68.6016 89.2402 44.4864C89.2402 20.3712 69.691 0.822021 45.5758 0.822021C21.4606 0.822021 1.91144 20.3712 1.91144 44.4864C1.91144 68.6016 21.4606 88.1508 45.5758 88.1508Z"
          fill="#BAF96A"
        />
        <path
          d="M45.6031 308.839V44.6468"
          stroke="#3F3D56"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M45.6032 55.7224C51.7892 55.7224 56.8039 50.7077 56.8039 44.5216C56.8039 38.3356 51.7892 33.3209 45.6032 33.3209C39.4172 33.3209 34.4024 38.3356 34.4024 44.5216C34.4024 50.7077 39.4172 55.7224 45.6032 55.7224Z"
          fill="#3F3D56"
        />
        <path
          d="M11.2008 246.867C17.3868 246.867 22.4015 241.852 22.4015 235.666C22.4015 229.48 17.3868 224.465 11.2008 224.465C5.01475 224.465 0 229.48 0 235.666C0 241.852 5.01475 246.867 11.2008 246.867Z"
          fill="#3F3D56"
        />
        <path
          d="M45.6032 101.736C45.6032 101.736 44.0031 67.3208 11.2008 71.321L45.6032 101.736Z"
          fill="#3F3D56"
        />
        <path
          d="M45.6032 199.298C45.6032 199.298 44.0031 164.883 11.2008 168.884L45.6032 199.298Z"
          fill="#3F3D56"
        />
        <path
          d="M45.6032 305.76C45.6032 305.76 52.8037 238.866 11.2008 235.666"
          stroke="#3F3D56"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M80.6927 141.799C86.8787 141.799 91.8934 136.785 91.8934 130.599C91.8934 124.413 86.8787 119.398 80.6927 119.398C74.5067 119.398 69.4919 124.413 69.4919 130.599C69.4919 136.785 74.5067 141.799 80.6927 141.799Z"
          fill="#3F3D56"
        />
        <path
          d="M46.2903 197.125C46.2903 197.125 39.0898 133.799 80.6926 130.599"
          stroke="#3F3D56"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
      <div className="svg-right">
        <svg width="157" height="310" viewBox="0 0 157 310" fill="none">
          <path
            d="M115.348 205.827C94.209 205.827 77.0727 188.69 77.0727 167.552C77.0727 146.413 94.209 129.276 115.348 129.276C136.486 129.276 153.623 146.413 153.623 167.552C153.623 188.69 136.486 205.827 115.348 205.827Z"
            fill="#99D590"
          />
          <path
            d="M117.599 309.394L115.348 167.552"
            stroke="#3F3D56"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M115.348 177.683C109.752 177.683 105.216 173.147 105.216 167.552C105.216 161.956 109.752 157.42 115.348 157.42C120.943 157.42 125.479 161.956 125.479 167.552C125.479 173.147 120.943 177.683 115.348 177.683Z"
            fill="#3F3D56"
          />
          <path
            d="M116.473 208.078C116.473 208.078 117.391 177.011 145.743 180.159L116.473 208.078Z"
            fill="#3F3D56"
          />
          <path
            d="M118.17 307.143C118.17 307.143 111.08 248.635 146.868 245.227"
            stroke="#3F3D56"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M146.868 255.359C141.273 255.359 136.737 250.823 136.737 245.227C136.737 239.632 141.273 235.096 146.868 235.096C152.464 235.096 157 239.632 157 245.227C157 250.823 152.464 255.359 146.868 255.359Z"
            fill="#3F3D56"
          />
          <path
            d="M45.5758 88.1508C69.691 88.1508 89.2402 68.6016 89.2402 44.4864C89.2402 20.3712 69.691 0.822021 45.5758 0.822021C21.4606 0.822021 1.91144 20.3712 1.91144 44.4864C1.91144 68.6016 21.4606 88.1508 45.5758 88.1508Z"
            fill="#BAF96A"
          />
          <path
            d="M45.6031 308.839V44.6468"
            stroke="#3F3D56"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M45.6032 55.7224C51.7892 55.7224 56.8039 50.7077 56.8039 44.5216C56.8039 38.3356 51.7892 33.3209 45.6032 33.3209C39.4172 33.3209 34.4024 38.3356 34.4024 44.5216C34.4024 50.7077 39.4172 55.7224 45.6032 55.7224Z"
            fill="#3F3D56"
          />
          <path
            d="M11.2008 246.867C17.3868 246.867 22.4015 241.852 22.4015 235.666C22.4015 229.48 17.3868 224.465 11.2008 224.465C5.01475 224.465 0 229.48 0 235.666C0 241.852 5.01475 246.867 11.2008 246.867Z"
            fill="#3F3D56"
          />
          <path
            d="M45.6032 101.736C45.6032 101.736 44.0031 67.3208 11.2008 71.321L45.6032 101.736Z"
            fill="#3F3D56"
          />
          <path
            d="M45.6032 199.298C45.6032 199.298 44.0031 164.883 11.2008 168.884L45.6032 199.298Z"
            fill="#3F3D56"
          />
          <path
            d="M45.6032 305.76C45.6032 305.76 52.8037 238.866 11.2008 235.666"
            stroke="#3F3D56"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M80.6927 141.799C86.8787 141.799 91.8934 136.785 91.8934 130.599C91.8934 124.413 86.8787 119.398 80.6927 119.398C74.5067 119.398 69.4919 124.413 69.4919 130.599C69.4919 136.785 74.5067 141.799 80.6927 141.799Z"
            fill="#3F3D56"
          />
          <path
            d="M46.2903 197.125C46.2903 197.125 39.0898 133.799 80.6926 130.599"
            stroke="#3F3D56"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
};

export default index;
