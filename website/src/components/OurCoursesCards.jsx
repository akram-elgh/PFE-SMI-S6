/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function OurCoursesCards(props) {
  const {
    our_courses,
    our_courses_title1,
    our_courses_title2,
    our_courses_title3,
  } = props.lang;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="our-courses row light" id="our-courses">
      <div className="col-12 our-courser-title">
        <h1 className="row-title text-center">{our_courses}</h1>
      </div>
      <div className="row our-courses-cards">
        <div className="col-lg-3 our-courses-card light" data-aos="fade-right">
          <svg
            width="263"
            height="215"
            viewBox="0 0 263 215"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="save-money">
              <g id="group">
                <path
                  id="hand"
                  d="M228.612 131.028L179.206 180.434C173.469 186.411 164.862 190.634 155.778 190.634H118.644C113.942 190.634 109.719 192.467 106.611 195.575L94.2594 207.209H38L92.1078 152.384L92.0281 152.305C97.7656 146.567 105.814 142.981 114.659 142.901H168.05C173.708 142.901 178.25 147.444 178.25 153.101C178.25 158.759 173.708 163.301 168.05 163.301H125.019C123.186 163.142 121.672 164.656 121.672 166.648C121.672 168.64 123.186 170.075 125.098 170.075H167.891C172.433 170.234 176.736 168.322 179.923 165.134C183.111 161.947 184.864 157.564 184.864 153.101C185.023 151.03 184.466 148.798 183.748 146.886L214.109 116.525C218.173 112.461 224.548 112.461 228.533 116.365C232.677 120.429 232.597 127.044 228.612 131.028Z"
                  fill="#FF8730"
                />
                <path
                  id="money"
                  d="M87.7051 82.16C87.3017 52.519 110.719 28.1324 140.36 27.7289C170.001 27.3254 194.23 50.9041 194.634 80.5451C195.037 110.186 171.379 134.417 141.897 134.818C112.416 135.219 88.1064 111.642 87.7051 82.16ZM148.35 93.6872C148.4 97.3525 145.409 100.103 139.274 100.186C133.537 100.264 128.171 98.3451 124.722 96.7184L122.161 107.592C125.292 109.302 131.769 110.888 138.143 110.801L138.254 118.929L145.664 118.828L145.55 110.461C156.354 107.923 161.366 101.4 161.252 93.0334C161.138 84.667 156.367 79.5518 146.197 76.0242C138.826 73.0962 135.38 71.7086 135.329 67.9636C135.292 65.2545 138.203 62.5052 143.621 62.4315C149.04 62.3577 153.047 63.9768 155.531 64.979L158.414 54.3403C155.124 52.6318 150.644 51.4177 144.509 51.5012L144.396 43.2145L136.986 43.3153L137.106 52.1598C127.253 54.2863 121.921 60.7345 122.033 68.9415C122.153 77.786 128.356 82.6427 138.203 85.9355C145.332 88.5481 148.301 90.0219 148.35 93.6872Z"
                  fill="#FF8730"
                />
              </g>
            </g>
          </svg>
          <h1>{our_courses_title1}</h1>
        </div>
        <div className="col-lg-3 our-courses-card light" data-aos="fade-right">
          <svg
            width="235"
            height="235"
            viewBox="0 0 235 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="quality 1">
              <g id="Group">
                <path
                  id="circle"
                  d="M117.5 26.8291L138.454 38.9708H162.737L174.879 60.1208L196.029 72.2624V96.5458L208.171 117.5L196.029 138.454V162.737L174.879 174.879L162.737 196.029H138.454L117.5 208.171L96.5458 196.029H72.2624L60.1208 174.879L38.9708 162.737V138.454L26.8291 117.5L38.9708 96.5458V72.2624L60.1208 60.1208L72.2624 38.9708H96.5458L117.5 26.8291Z"
                  fill="#FF8730"
                />
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M117.5 183.887C80.879 183.887 51.1123 154.121 51.1123 117.5C51.1123 80.879 80.879 51.1123 117.5 51.1123C154.121 51.1123 183.887 80.879 183.887 117.5C183.887 154.121 154.121 183.887 117.5 183.887ZM117.5 56.7915C84.0123 56.7915 56.7915 84.0123 56.7915 117.5C56.7915 150.987 84.0123 178.208 117.5 178.208C150.987 178.208 178.208 150.987 178.208 117.5C178.208 84.0123 150.987 56.7915 117.5 56.7915Z"
                    fill="white"
                  />
                </g>
                <g id="Group_3">
                  <path
                    id="check"
                    d="M110.254 142.175L81.4664 119.262C79.1164 117.304 78.7247 113.975 80.6831 111.625C82.6414 109.275 85.9706 108.883 88.3206 110.841L112.996 130.621L145.896 93.804C147.854 91.6498 151.379 91.454 153.533 93.4123C155.687 95.3707 155.883 98.8956 153.925 101.05L117.696 141.587C115.737 143.741 112.408 143.937 110.254 142.175Z"
                    fill="white"
                  />
                </g>
              </g>
            </g>
          </svg>

          <h1>{our_courses_title2}</h1>
        </div>
        <div className="col-lg-3 our-courses-card light" data-aos="fade-right">
          <svg
            width="184"
            height="184"
            viewBox="0 0 184 184"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="teacher 2" clipPath="url(#clip0_202_21)">
              <g id="Group">
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M168.927 89.6084H139.24V100.644H168.927V89.6084Z"
                    fill="#FF8730"
                  />
                  <path
                    id="Vector_2"
                    d="M17.2236 2.71484V20.0677L24.8041 17.7289V10.2894H176.414V106.938H55.7666L55.3728 114.524H184V2.71484H17.2236Z"
                    fill="#FF8730"
                  />
                  <path
                    id="teacher"
                    d="M29.2816 66.679C41.6856 66.679 51.741 56.6236 51.741 44.2196C51.741 31.8157 41.6856 21.7603 29.2816 21.7603C16.8777 21.7603 6.82227 31.8157 6.82227 44.2196C6.82227 56.6236 16.8777 66.679 29.2816 66.679Z"
                    fill="#FF8730"
                  />
                  <path
                    id="teacher"
                    d="M48.3564 131.048V171.019H49.8843L58.8986 172.982V181.291H51.2241L42.2744 179.822L42.1921 181.291H32.267V172.03V171.031V131.054H26.6198V171.031V172.03V181.291H16.7123L16.6242 179.822L7.66863 181.291H0V172.982L9.00843 171.031H10.5539V131.054V127.282V122.169H9.37864L8.9673 113.79H1.25166L2.4093 73.4427L20.6201 70.0403L28.8998 79.9713L37.4617 70.0403H50.0958L85.5008 51.6943L86.695 54L96 49L97 51L92 53.5L94.5 57.5L89.8026 60L90.5897 61.5196L51.8587 81.5873L49.7726 122.163H48.3564V127.276V131.048Z"
                    fill="#FF8730"
                  />
                </g>
              </g>
              <g id="subjects">
                <g id="physics" className="light">
                  <g id="Group_3">
                    <g id="Group_4">
                      <path
                        id="Vector_5"
                        d="M158.773 31.4181C158.834 31.234 158.773 31.0499 158.589 30.8658L156.748 29.0249C156.502 28.7795 156.134 28.7795 155.889 29.0249L151.593 33.3204C151.47 33.4431 151.409 33.5659 151.409 33.7499V35.5908C151.409 35.959 151.655 36.2045 152.023 36.2045H153.864C154.048 36.2045 154.17 36.1431 154.293 36.0204L157.791 32.5226H158.159C158.527 32.5226 158.773 32.7681 158.773 33.1363V47.8635C158.773 48.2317 158.527 48.4772 158.159 48.4772H134.841C134.473 48.4772 134.227 48.2317 134.227 47.8635V33.1363C134.227 32.7681 134.473 32.5227 134.841 32.5227H150.182C150.55 32.5227 150.795 32.2772 150.795 31.9091C150.795 31.5409 150.55 31.2955 150.182 31.2955H134.841C133.798 31.2954 133 32.0931 133 33.1363V47.8636C133 48.9068 133.798 49.7045 134.841 49.7045H158.159C159.202 49.7045 160 48.9068 160 47.8636V33.1363C160 32.3385 159.448 31.6635 158.773 31.4181ZM157.116 31.4795L153.618 34.9772H152.636V33.9954L156.318 30.3135L157.3 31.2954L157.116 31.4795Z"
                        // fill="#263238"
                      />
                    </g>
                  </g>
                  <g id="Group_5">
                    <g id="Group_6">
                      <path
                        id="Vector_6"
                        d="M137.909 41.1134C138.277 41.1134 138.523 40.8679 138.523 40.4998C138.523 40.1316 138.277 39.8862 137.909 39.8862H136.682V38.6589H137.909C138.277 38.6589 138.523 38.4134 138.523 38.0453C138.523 37.6771 138.277 37.4316 137.909 37.4316H136.068C135.7 37.4316 135.455 37.6771 135.455 38.0453V42.9544C135.455 43.3225 135.7 43.568 136.068 43.568H137.909C138.277 43.568 138.523 43.3225 138.523 42.9544C138.523 42.5862 138.277 42.3407 137.909 42.3407H136.682V41.1134H137.909V41.1134Z"
                        // fill="#263238"
                      />
                    </g>
                  </g>
                  <g id="Group_7">
                    <g id="Group_8">
                      <path
                        id="Vector_7"
                        d="M142.205 38.6592H140.364C139.995 38.6592 139.75 38.9047 139.75 39.2728C139.75 39.6409 139.995 39.8864 140.364 39.8864H142.205C142.573 39.8864 142.818 39.6409 142.818 39.2728C142.818 38.9047 142.573 38.6592 142.205 38.6592Z"
                        // fill="#263238"
                      />
                    </g>
                  </g>
                  <g id="Group_9">
                    <g id="Group_10">
                      <path
                        id="Vector_8"
                        d="M142.205 41.1138H140.364C139.995 41.1138 139.75 41.3592 139.75 41.7274C139.75 42.0956 139.995 42.341 140.364 42.341H142.205C142.573 42.341 142.818 42.0955 142.818 41.7274C142.818 41.3592 142.573 41.1138 142.205 41.1138Z"
                        // fill="#263238"
                      />
                    </g>
                  </g>
                  <g id="Group_11">
                    <g id="Group_12">
                      <path
                        id="Vector_9"
                        d="M153.25 41.1134C152.882 41.1134 152.636 41.3589 152.636 41.7271C152.636 42.0953 152.391 42.3407 152.023 42.3407C151.654 42.3407 151.409 42.0952 151.409 41.7271V39.2725C151.409 38.9044 151.654 38.6589 152.023 38.6589C152.391 38.6589 152.636 38.9044 152.636 39.2725C152.636 39.6407 152.882 39.8862 153.25 39.8862C153.618 39.8862 153.863 39.6407 153.863 39.2725C153.863 38.2294 153.066 37.4316 152.023 37.4316C150.979 37.4316 150.182 38.2294 150.182 39.2725V41.7271C150.182 42.7703 150.979 43.568 152.023 43.568C153.066 43.568 153.863 42.7703 153.863 41.7271C153.863 41.3589 153.618 41.1134 153.25 41.1134Z"
                        // fill="#263238"
                      />
                    </g>
                  </g>
                  <g id="Group_13">
                    <g id="Group_14">
                      <path
                        id="Vector_10"
                        d="M148.586 37.4931C148.341 37.3704 148.095 37.4317 147.911 37.6158L146.5 39.0272L145.089 37.6158C144.905 37.4317 144.659 37.3703 144.414 37.4931C144.168 37.5545 144.045 37.7999 144.045 38.0454V42.9545C144.045 43.3226 144.291 43.5681 144.659 43.5681C145.027 43.5681 145.273 43.3226 145.273 42.9545V39.5181L146.07 40.3158C146.316 40.5613 146.684 40.5613 146.929 40.3158L147.727 39.5181V42.9545C147.727 43.3226 147.973 43.5681 148.341 43.5681C148.709 43.5681 148.954 43.3226 148.954 42.9545V38.0454C148.955 37.7999 148.832 37.5544 148.586 37.4931Z"
                        // fill="#263238"
                      />
                    </g>
                  </g>
                  <g id="Group_15">
                    <g id="Group_16">
                      <path
                        id="Vector_11"
                        d="M156.932 39.2729L157.3 38.782C157.607 38.4138 157.607 37.9229 157.423 37.4934C157.239 37.0638 156.809 36.8184 156.318 36.8184H155.705C155.336 36.8184 155.091 37.0638 155.091 37.432C155.091 37.8001 155.336 38.0456 155.705 38.0456H156.318L155.214 39.5183C155.091 39.7024 155.03 39.9478 155.152 40.1319C155.275 40.316 155.459 40.5002 155.705 40.5002H156.932C157.3 40.5002 157.545 40.2547 157.545 39.8866C157.545 39.5184 157.3 39.2729 156.932 39.2729Z"
                        // fill="#263238"
                      />
                    </g>
                  </g>
                  <g id="Group_17">
                    <g id="Group_18">
                      <path
                        id="Vector_12"
                        d="M159.386 50.9316H133.614C133.245 50.9316 133 51.1771 133 51.5453C133 51.9135 133.245 52.1589 133.614 52.1589H159.386C159.755 52.1589 160 51.9134 160 51.5453C160 51.1771 159.755 50.9316 159.386 50.9316Z"
                        // fill="#263238"
                      />
                    </g>
                  </g>
                </g>
                <g id="uk">
                  <path
                    id="Vector_13"
                    d="M84.4273 24.6206H66.5727C65.7041 24.6206 65 25.3247 65 26.1933V36.8065C65 37.6751 65.7041 38.3793 66.5727 38.3793H84.4273C85.2958 38.3793 86 37.6751 86 36.8065V26.1933C86 25.3247 85.2959 24.6206 84.4273 24.6206Z"
                    fill="#41479B"
                  />
                  <path
                    id="Vector_14"
                    d="M85.9782 25.9334C85.8543 25.1886 85.2072 24.6206 84.4273 24.6206H84.018L77.3103 29.0153V24.6206H73.6897V29.0153L66.982 24.6206H66.5727C65.7928 24.6206 65.1457 25.1886 65.0218 25.9334L70.7549 29.6896H65V33.3103H70.7549L65.0218 37.0665C65.1457 37.8113 65.7928 38.3793 66.5727 38.3793H66.982L73.6897 33.9846V38.3793H77.3103V33.9846L84.018 38.3793H84.4273C85.2072 38.3793 85.8543 37.8113 85.9782 37.0665L80.2451 33.3103H86V29.6896H80.2451L85.9782 25.9334Z"
                    fill="#F5F5F5"
                  />
                  <g id="uk_2">
                    <path
                      id="Vector_15"
                      d="M76.5862 24.6206H74.4138V30.4137H65V32.5861H74.4138V38.3792H76.5862V32.5861H86V30.4137H76.5862V24.6206Z"
                      fill="#FF4B55"
                    />
                    <path
                      id="Vector_16"
                      d="M66.017 38.2776L73.6698 33.3101H72.3398L65.3784 37.8288C65.5488 38.0276 65.7677 38.1834 66.017 38.2776Z"
                      fill="#FF4B55"
                    />
                    <path
                      id="Vector_17"
                      d="M79.2075 33.3101H77.8774L85.2896 38.1214C85.497 37.9852 85.6701 37.8012 85.7936 37.5851L79.2075 33.3101Z"
                      fill="#FF4B55"
                    />
                    <path
                      id="Vector_18"
                      d="M65.166 25.4903L71.6354 29.6898H72.9655L65.6347 24.9312C65.4378 25.0777 65.2768 25.2692 65.166 25.4903Z"
                      fill="#FF4B55"
                    />
                    <path
                      id="Vector_19"
                      d="M78.6406 29.6893L85.6147 25.1622C85.4425 24.9641 85.2218 24.8092 84.9708 24.7168L77.3105 29.6893H78.6406Z"
                      fill="#FF4B55"
                    />
                  </g>
                </g>
                <g id="math" className="light">
                  <path
                    id="Vector_20"
                    d="M95.9667 73.2249L95.6654 72.999L95.6653 72.999C92.7988 70.849 88.6956 72.788 88.5365 76.3677L88.4222 78.9388L88.401 79.4166H87.9227H85.5C84.9938 79.4166 84.5833 79.827 84.5833 80.3333C84.5833 80.8395 84.9938 81.25 85.5 81.25H87.7968H88.3195L88.2963 81.7722L87.7446 94.184C87.6469 96.3825 85.0499 97.4922 83.3937 96.043L83.3936 96.043L83.2703 95.9351C82.8894 95.6017 82.3102 95.6403 81.9768 96.0213C81.6435 96.4022 81.682 96.9812 82.0629 97.3147L95.9667 73.2249ZM95.9667 73.2249C95.9667 73.2249 95.9667 73.225 95.9667 73.225C96.3717 73.5288 96.4538 74.1033 96.15 74.5083L96.55 74.8083L96.15 74.5083C95.8462 74.9133 95.2716 74.9953 94.8667 74.6916L94.8666 74.6916L94.5654 74.4657C94.5653 74.4656 94.5653 74.4656 94.5653 74.4656C92.8776 73.1998 90.4617 74.3415 90.368 76.4491L90.2593 78.8944L90.2361 79.4166H90.7588H94C94.5063 79.4166 94.9167 79.827 94.9167 80.3333C94.9167 80.8395 94.5063 81.25 94 81.25H90.6329H90.1546L90.1334 81.7278L89.5762 94.2654C89.4102 97.9995 84.9993 99.884 82.1864 97.4227L82.1862 97.4225L82.0631 97.3149L95.9667 73.2249Z"
                    // fill="#212121"
                  />
                  <path
                    id="Vector_21"
                    d="M95.5328 87.4821C95.891 87.285 96.3411 87.4312 96.5152 87.8011L97.6662 90.247L92.9981 94.9149C92.4449 95.4681 92.4449 96.3651 92.9981 96.9183C93.5515 97.4717 94.4484 97.4717 95.0016 96.9183L98.9484 92.9717L100.053 95.3196C101.037 97.4109 103.729 98.0144 105.512 96.5435L106.235 95.9469C106.838 95.449 106.924 94.5562 106.426 93.9526C105.928 93.3491 105.035 93.2635 104.432 93.7614L103.709 94.358C103.352 94.6521 102.814 94.5314 102.617 94.1132L101.078 90.8424L104.918 87.0017C105.472 86.4485 105.472 85.5514 104.918 84.9982C104.365 84.445 103.468 84.445 102.915 84.9982L99.7955 88.1176L99.0788 86.5947C98.2086 84.7454 95.9581 84.0145 94.1675 84.9994L93.3172 85.467C92.6317 85.8441 92.3816 86.7055 92.7586 87.3911C93.1357 88.0766 93.9972 88.3267 94.6827 87.9496L95.5328 87.4821Z"
                    // fill="#212121"
                  />
                </g>
                <g id="germany">
                  <path
                    id="Vector_22"
                    d="M110 69.7498C110 70.3687 110.246 70.9622 110.683 71.3998C111.121 71.8373 111.714 72.0832 112.333 72.0832H128.667C129.286 72.0832 129.879 71.8373 130.317 71.3998C130.754 70.9622 131 70.3687 131 69.7498V67.4165H110V69.7498Z"
                    fill="#FFCD05"
                  />
                  <path
                    id="Vector_23"
                    d="M110 62.1665H131V67.4165H110V62.1665Z"
                    fill="#ED1F24"
                  />
                  <path
                    id="Vector_24"
                    d="M128.667 56.9165H112.333C111.714 56.9165 111.121 57.1623 110.683 57.5999C110.246 58.0375 110 58.631 110 59.2498V62.1665H131V59.2498C131 58.631 130.754 58.0375 130.317 57.5999C129.879 57.1623 129.286 56.9165 128.667 56.9165Z"
                    fill="#141414"
                  />
                </g>
                <g id="france">
                  <path
                    id="Vector_25"
                    d="M104.723 32.4724C107.026 33.0085 109.328 32.9888 111.631 32.771V32.7645C116.426 32.2747 121.222 30.8452 126.017 31.9986C126.464 32.1061 126.893 31.7661 126.893 31.3066V17.2238C126.893 17.1954 126.891 17.1675 126.888 17.1399C126.778 16.8494 126.521 16.5967 126.221 16.5272C121.844 15.508 117.466 16.4962 113.088 17.0393C112.603 17.1045 112.117 17.1638 111.631 17.2135V17.2C109.329 17.4178 107.026 17.4375 104.723 16.9014C104.324 16.8087 104 17.0378 104 17.4375V31.5621C104 31.9612 104.324 32.3798 104.723 32.4724Z"
                    fill="#0B67B2"
                  />
                  <path
                    id="Vector_26"
                    d="M126.893 17.1568C126.787 16.8595 126.527 16.5982 126.221 16.5275C123.902 15.9874 121.582 16.0113 119.262 16.2337V31.8048C121.582 31.5824 123.902 31.5585 126.221 32.0986C126.526 32.1693 126.787 32.0518 126.893 31.8143V17.1568Z"
                    fill="#FF473E"
                  />
                  <path
                    id="Vector_27"
                    d="M111.631 32.7711C114.175 32.5305 116.718 32.0483 119.262 31.8045V16.2334C116.718 16.4772 114.175 16.9594 111.631 17.2V32.7711Z"
                    fill="#E8E8E8"
                  />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_202_21">
                <rect width="184" height="184" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1>{our_courses_title3}</h1>
        </div>
      </div>
    </div>
  );
}
