<template>
  <v-app>
    <v-layout wrap class="index">
      <Layout />
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Raleway:400,500,600,700,800,900"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,500,600,700,800,900"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <script src="https://unpkg.com/aos@next/dist/aos.js" />
      <script>
        AOS.init()
      </script>
      <v-container text-xs-center>
        <v-layout justify-center align-center>
          <v-flex xl12>
            <v-card class="main-heading" flat color="#404a60">
              <v-card-title class="header-text">
                <h1 class="p-class">
                  <p>
                    your
                    <span class="mint-fuse">partner</span>
                    for all<br />
                    things <span class="mint-fuse">digital</span>
                  </p>
                </h1>
                <!-- <h2 class="p-class">
                  <p>
                    LET
                    <span class="mint-fuse">MINT FUSE</span>
                    MAKE<br />
                    YOUR DESIGN
                  </p>
                </h2>
                <h3 class="p-class">
                  <p>
                    LET
                    <span class="mint-fuse">MINT FUSE</span>
                    DO<br />
                    YOUR MARKETING
                  </p>
                </h3> -->
              </v-card-title>
              <!-- <svg viewbox="0 0 700 225">
          <clipPath id="textClip" class="filled-heading">
            <text y="70">let mint fuse</text>
            <text y="140">grow your</text>
            <text y="210">business</text>

            <text y="70">let mint fuse</text>
            <text y="140">do your</text>
            <text y="210">design</text>

            <text y="70">let mint fuse</text>
            <text y="140">do your</text>
            <text y="210">marketing</text>
          </clipPath>

          <g id="background" clip-path="url(#textClip)">
            <path
              d="m108.51 198.24c-68.576 21.595-114.17 57.226-104.72 2.8714 9.4539-54.355 8.8929 15.643-2.562-21.478-11.455-37.122 36.826-87.851 52.189-57.786 15.413 30.066 3.0926-35.052 57.465 2.1231 54.373 37.175 26.891 0.19388 14.227 40.632-12.664 40.438-1.8729 29-16.602 33.638z"
              fill="#4e8cff"
              stroke-width="0"
            />
            <path
              d="m674.85 1.3643c7.6071 35.587 1.2164 57.949 39.639 89.576 38.422 31.627-23.024 49.992-73.441 43.721 1.7405 2.1019-32.888 63.815-38.042-72.07-0.67588-46.479 64.237-96.813 71.844-61.227z"
              fill="#ffbe4e"
              stroke-width="0"
            />
            <path
              d="m100.74 242.53c-43.428 33.95-50.214-121.92 16.161-118.97 66.376 2.9548 56.817-28.557 102.44-2.8635 45.62 25.694-31.239 58.396 26.69 41.251 57.929-17.144 51.753 1.7768 65.448 35.313 13.695 33.536-89.181-4.3226-123.31 18.987-34.124 23.31-44.003-7.6694-87.432 26.281z"
              fill="#4ee7ff"
              stroke-width="0"
            />
            <path
              d="m340.46 112.61c-3.9639 15.799 78.413 55.088-23.068 60.76-114.26 6.386-84.813 12.838-99.843-6.4874-28.307-36.397-22.793-32.755 42.602-87.885 65.395-55.13-30.417 21.512-21.859-40.612 8.5586-62.123-10.65-19.182 77.451-39.445 88.101-20.263 46.189 28.092 24.718 113.67z"
              fill="#e7ff4e"
              stroke-width="0"
            />
            <path
              d="m8.8117-5.3718c44.016 17.435-9.7209 57.103 44.026 51.05 53.747-6.0529 46.214-20.928 51.757 21.703 5.5426 42.631-45.65 60.508-93.082 29.237-47.432-31.271 47.851-13.883 0.6852 13.87-47.166 27.753-15.522-48.2-11.667-81.328 3.855-33.128-35.736-51.966 8.2798-34.531z"
              fill="#e7ff4e"
              stroke-width="0"
            />
            <path
              d="m165.6 88.767c61.136 62.823 35.015 40.577-46.096 51.296-81.112 10.719 42.189 6.2343-36.228 43.575-78.417 37.341-152.25 22.876-89.784-72.819 62.465-95.694 5.1128 29.277 92.934-3.0729 87.821-32.35 101.44 1.946 84.294 51.483-17.145 49.537-66.256-133.29-5.1201-70.463z"
              fill="#ff664e"
              stroke-width="0"
            />
            <path
              d="m433.01 37.746c24.598-43.188-14.973 103.95 14.584 51.296 10.481-103.41 99.772 14.333 75.403 24.563-61.833 24.535-22.985 7.311-25.484 60413-2.4986 53.042-77.838 25.441-90.466-37.041-12.628-62.482 25.962-99.171 25.962-99.171z"
              fill="#664eff"
              stroke-width="0"
            />
            <path
              d="m183.13 65.878c18.642-53.437-40.63-33.913 5.3102-57.185 45.94-23.273 34.028 18.436 65.703-25.409 31.675-43.845 33.531 41.827 7.5587 63.954-25.973 22.126 33.664-12.385 30.057 31.281-3.0714 37.175-65.218 43.012-87.591 43.643-22.373 0.63069-39.679-2.8459-21.038-56.283z"
              fill="#ffbe4e"
              stroke-width="0"
            />
            <path
              d="m141.35 98.623c-56.55-10.762-30.733 53.499-74.432 14.751-43.699-38.748-2.1148-57.263 41.995-55.804 44.11 1.4597-40.712 64.536-8.6373-11.945 32.075-76.481 51.99-53.221 61.672 3.2503 68.003-10.901 46.152 62.999-20.597 49.748z"
              fill="#ff4e8f"
              stroke-width="0"
            />
            <path
              d="m598.05 194.59c-32.463 1.6396-48.632-32.651-75.231-3.8193-26.599 28.831-35.331 25.417-38.068-38.95-2.7373-64.368 58.587-17.897 15.895-79.84-42.692-61.943 104.51 53.226 157.19 45.068 52.675-8.1579-5.6907 11.387 21.97 54.403 27.66 43.016-49.29 21.499-81.753 23.139z"
              fill="#4ee7ff"
              stroke-width="0"
            />
            <path
              d="m389.89 224.94c-55.339 19.152-109.12-63.021-77.6-62.249 16.441 0.40266 47.033 30.564 23.193-21.802-23.84-52.366 22.736-155.3 52.446-144.12 29.709 11.174 25.002 193.39 47.319 194.89 14.06 62.221-10.711 21.763-45.358 33.284z"
              fill="#4e8cff"
              stroke-width="0"
            />
            <path
              d="m642.4 1.4488c8.0908 53.053 5.8003 84.97-23.571 93.321-29.371 8.3517 31.584 28.449-48.193 7.544-79.777-20.905-9.3306-76.792-65.575-47.022-35.947-62.504 95.618-62.534 108.35-65.828 53.543-14.24 20.899-41.068 28.989 11.985z"
              fill="#8fff4e"
              stroke-width="0"
            />
            <path
              d="m147.32 57.816c-10.567-21.53-38.49-61.589-46.613-4.5724-9.9808 70.063-89.462-14.784-95.052-51.308-5.5894-36.523 67.904 4.7347 103.17-5.7093 35.27-10.444 75.212-34.432 90.247 30.71 15.035 65.143-29.389-0.21051 6.8358 18.603 36.225 18.813-34.527 61.31-58.593 12.276z"
              fill="#4eff66"
              stroke-width="0"
            />
            <path
              d="m395.36 39.277c-14.078-38.016-9.6195-43.2 21.428-52.883s45.105 40.379 63.729 14.036c18.624-26.343 26.366 9.3188 38.32 35.184 125.69 20.885 44.277 30.59-45.168 47.901-30.824 8.4535-28.678 67.18-62.508-1.5712-12.772-25.957 0 0-15.8-42.667z"
              fill="#ff664e"
              stroke-width="0"
            />
            <path
              d="m550.76 177.74c37.61 3.1772 52.837-62.124 55.775-30.206 2.9376 31.918 24.291 87.868-33.716 105.84-58.007 17.967 16.158-58.542-31.319-21.444-47.477 37.098-128.02 26.817-125.51-38.454 2.5098-65.271 58.923-25.209 84.786-7.8162 25.863 17.392 12.372-11.092 49.982-7.9151z"
              fill="#ff4e8f"
              stroke-width="0"
            />
            <path
              d="m598.05 190.59c43.319-15.087 90.958-113.59 101.34-92.047 10.377 21.543 2.7233 60.627-8.4086 112.73-11.132 52.101-37.759-11.405-48.075 13.405 0.0273 5.8999-95.091-16.654-44.852-34.086z"
              fill="#e7ff4e"
              stroke-width="0"
            />
            <path
              d="m311.01 154.14c3.7548 34.833 51.465 68.255 10.938 69.17-46.302 1.4813-28.726 7.7236-59.49 12.096-30.764 4.3729-139.76-30.084-110.17-49.861 29.593-19.777 31.604 24.454 34.672 2.7296 3.0688-21.725 58.195-19.481 124.05-34.135z"
              fill="#4eff66"
              stroke-width="0"
            />
          </g>
        </svg> -->
              <v-card-text class="u-header">
                <div class="text-u-header">we are an enthusiastic team of</div>
                <div class="text-u-header2">
                  <span class="flip-text">software developers</span>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <v-layout wrap class="index-2">
      <v-container class="index-2-cont" justify-center fluid>
        <v-flex xs12>
          <v-card height="800px" class="index-2-heading" flat>
            <v-card-title
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="index-2-headertext"
            >
              <h1 class="about-us">
                about<span style="font-weight: bold;"> us</span>
              </h1>
            </v-card-title>
            <v-card-text
              data-aos-delay="100"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-up"
              class="index-2-uheader"
              >We do graphic designing, web & application development, SEO,<br />
              SEM, pay-per-click ads, social media marketing and other services
              focused<br />
              around optimizing your website and digital presence to multiply
              growth of<br />
              your company in the International market.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
    <v-layout wrap class="index-3">
      <v-container class="index-3-cont" justify-center fluid>
        <v-flex xs12>
          <v-card height="900px" class="index-3-heading" flat>
            <v-card-title
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="index-3-headertext"
            >
              <h1 class="our-services">
                our<span style="font-weight: bold;"> services</span>
              </h1>
            </v-card-title>
            <v-container
              class="index-3-cont2"
              grid-list-xl
              text-xs-center
              fluid
            >
              <v-layout>
                <v-flex xs4>
                  <v-card flat color="#66cc99" height="520px" width="580px">
                    <v-card-title class="index-3-c1-title">
                      web & app<br />
                      development
                    </v-card-title>
                    <v-card-text class="index-3-c-text"
                      >Software Solutions For Needs</v-card-text
                    >
                  </v-card>
                </v-flex>
                <v-flex xs4>
                  <v-card flat color="#404a60" height="520px" width="580px">
                    <v-card-title class="index-3-c2-title">
                      digital<br />
                      media
                    </v-card-title>
                    <v-card-text class="index-3-c-text"
                      >Digital Reputation Management</v-card-text
                    >
                  </v-card>
                </v-flex>
                <v-flex xs4>
                  <v-card flat color="#00bfff" height="520px" width="580px">
                    <v-card-title class="index-3-c3-title">
                      graphic<br />
                      design
                    </v-card-title>
                    <v-card-text class="index-3-c-text"
                      >Creative Material For Branding</v-card-text
                    >
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
    <v-layout wrap class="index-4">
      <v-container class="index-4-cont" justify-center fluid>
        <v-flex xs12>
          <v-card height="1000px" class="index-4-heading" flat>
            <v-card-title
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="index-4-headertext"
            >
              <h1 class="our-expertise">
                our<span style="font-weight: bold;"> expertise</span>
              </h1>
            </v-card-title>
            <v-container
              class="index-4-cont2"
              grid-list-xl
              text-xs-center
              fluid
            >
              <v-layout>
                <v-flex xs4>
                  <v-card flat height="500px" width="580px">
                    <v-card-title class="index-4-c1-title">
                      web
                      <span style="color: #404a60;"> &nbsp;development</span>
                    </v-card-title>
                    <v-card-text class="index-4-c1-text">
                      Nodejs<br />
                      React, Vue, Ember<br />
                      PHP, Symphony, Laravel<br />
                      MySQL, PostgreSQL, MonogoDB<br />
                      Elastic
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4>
                  <v-card flat height="500px" width="580px">
                    <v-card-title class="index-4-c2-title">
                      mobile
                      <span style="color: #404a60;"> &nbsp;development</span>
                    </v-card-title>
                    <v-card-text class="index-4-c2-text">
                      React Native<br />
                      Swift<br />
                      IOS<br />
                      Java<br />
                      Android
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4>
                  <v-card flat height="500px" width="580px">
                    <v-card-title class="index-4-c2-title">
                      machine
                      <span style="color: #404a60;"> &nbsp;learning</span>
                    </v-card-title>
                    <v-card-text class="index-4-c3-text">
                      Python<br />
                      Natural Language Processing
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
    <v-layout wrap class="index-5">
      <v-container class="index-5-cont" justify-center fluid>
        <v-flex xs12>
          <v-card height="1250px" class="index-5-heading" flat>
            <v-card-title
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="index-5-headertext"
            >
              <h1 class="what-we-do">
                what we<span style="font-weight: bold;"> do</span>
              </h1>
            </v-card-title>
            <v-container class="index-5-cont2" text-xs-center fluid>
              <v-layout>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-right"
                  >
                    <v-card-title class="index-5-c1-title">
                      web
                      <span style="color: #66cc99;"> &nbsp;design</span>
                    </v-card-title>
                    <v-card-text class="index-5-c1-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-up"
                  >
                    <v-card-title class="index-5-c2-title">
                      graphic
                      <span style="color: #66cc99;"> &nbsp;design</span>
                    </v-card-title>
                    <v-card-text class="index-5-c2-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-left"
                  >
                    <v-card-title class="index-5-c2-title">
                      web
                      <span style="color: #66cc99;"> &nbsp;maintaince</span>
                    </v-card-title>
                    <v-card-text class="index-5-c3-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
            <v-container class="index-5-cont2" text-xs-center fluid>
              <v-layout>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-right"
                  >
                    <v-card-title class="index-5-c1-title">
                      web
                      <span style="color: #66cc99;"> &nbsp;development</span>
                    </v-card-title>
                    <v-card-text class="index-5-c1-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-up"
                  >
                    <v-card-title class="index-5-c2-title">
                      app
                      <span style="color: #66cc99;"> &nbsp;development</span>
                    </v-card-title>
                    <v-card-text class="index-5-c2-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-left"
                  >
                    <v-card-title class="index-5-c2-title">
                      digital
                      <span style="color: #66cc99;"> &nbsp;marketing</span>
                    </v-card-title>
                    <v-card-text class="index-5-c3-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
            <v-container class="index-5-cont2" text-xs-center fluid>
              <v-layout>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-right"
                  >
                    <v-card-title class="index-5-c1-title">
                      e-
                      <span style="color: #66cc99;"> &nbsp;commerce</span>
                    </v-card-title>
                    <v-card-text class="index-5-c1-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="index-5-flex">
                  <v-card
                    class="index-5-card"
                    flat
                    height="250px"
                    width="580px"
                    color="#404a60"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos="fade-up"
                  >
                    <v-card-title class="index-5-c2-title">
                      social
                      <span style="color: #66cc99;"> &nbsp;media</span>
                    </v-card-title>
                    <v-card-text class="index-5-c2-text">
                      Our fresh design concepts<br />
                      give an amazing user expe- <br />rience which translates
                      to<br />
                      return customers & gener- <br />ate business
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
    <v-layout wrap class="index-6">
      <v-container class="index-6-cont" justify-center fluid>
        <v-flex xs12>
          <v-card height="800px" class="index-6-heading" flat>
            <v-card-title
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="index-6-headertext"
            >
              <h1 class="why-choose-us">
                why<span style="font-weight: bold;"> choose us</span>
              </h1>
            </v-card-title>
            <v-card-text
              data-aos-delay="100"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-up"
              class="index-6-uheader"
              >We understand the client, assess their needs and gather team set
              to reach<br />
              target goals. Your goals can be as varied as building software for
              a retail<br />
              store to designing a logo for your new brand. We reach these goals
              with our<br />
              team of expert programmers, coders, UI/UX designers, web
              developers,<br />
              application developers, digital media strategists, social media
              marketers,<br />
              and SEO & SEM fanatics that employ their best skills and expertise
              to deliver a<br />
              successful project. We provide unparalleled support to our clients
              who grow<br />
              their business and get to enjoy the praise.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
import Layout from '~/components/default.vue'
// import Footer from '~/components/footer.vue'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style scoped>
.index {
  background-color: #404a60;
}
.p-class {
  font-size: 75px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  color: #66cc99;
  letter-spacing: 1px;
  line-height: 6rem;
  text-transform: uppercase;
}
.mint-fuse {
  color: whitesmoke;
}
.main-heading {
  text-align: center;
  padding-top: 150px;
}
/* Basic styling */
/* svg {
  width: 100%;
}
.filled-heading {
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-size: 4em;
  font-weight: 900;
  line-height: 0.9;
} */

/* Animate the background shapes */
/* #background path {
  animation: pulse 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite; */

/* Necessary to keep the SVG objects in place while scaling */
/* transform-origin: 50% 50%;
  transform-box: fill-box;
} */

/* Reveal the desired lines of text in the desired order */
/* #textClip text:nth-of-type(n + 1):nth-of-type(-n + 3) {
  animation: showFirst 12s infinite;
}
#textClip text:nth-of-type(n + 4):nth-of-type(-n + 6) {
  animation: showSecond 12s infinite;
}
#textClip text:nth-of-type(n + 7):nth-of-type(-n + 9) {
  animation: showThird 12s infinite;
} */

/* @keyframes pulse { */
/* Rotating it along with the scale makes it a little bit more fancy */
/* 0%,
  100% {
    transform: scale(0) rotate(33deg);
  }
  35%,
  65% {
    transform: scale(1) rotate(0deg);
  }
}
@keyframes showFirst {
  0%,
  33% {
    opacity: 1;
  }
  33.0001%,
  100% {
    opacity: 0;
  }
}
@keyframes showSecond {
  33.0001%,
  66% {
    opacity: 1;
  }
  0%,
  33%,
  66.0001%,
  100% {
    opacity: 0;
  }
}
@keyframes showThird {
  66.0001%,
  99.999% {
    opacity: 1;
  }
  0%,
  66%,
  100% {
    opacity: 0;
  }
} */
h2 {
  /* top: 300; */
  position: absolute;
}
h3 {
  /* top: 300; */
  position: absolute;
}
.header-text {
  animation: fadeInUp 2s ease;
  /* animation-duration: 7s; */
  padding-bottom: 0;
  text-align: center;
  display: block;
}
/* .header-text h1 {
  animation: showFirst 21s infinite;
}
.header-text h2 {
  animation: showSecond 21s infinite;
}
.header-text h3 {
  animation: showThird 21s infinite;
}
@keyframes showFirst {
  0%,
  33.3% {
    opacity: 1;
  }
  33.4%,
  100% {
    opacity: 0;
  }
}
@keyframes showSecond {
  33.5%,
  66.7% {
    opacity: 1;
  }
  0%,
  33.3%,
  66.8%,
  100% {
    opacity: 0;
  }
}
@keyframes showThird {
  66.8%,
  99.9% {
    opacity: 1;
  }
  0%,
  66.7%,
  100% {
    opacity: 0;
  }
} */
.u-header {
  padding-top: 0px;
  line-height: 2rem;
  letter-spacing: 3px;
}
.text-u-header {
  text-transform: uppercase;
  font-size: 29px;
  font-weight: 500;
  font-family: 'Raleway';
  color: aquamarine;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}
.text-u-header2 {
  text-transform: uppercase;
  font-size: 29px;
  font-family: 'Raleway';
  font-weight: 700;
  color: aquamarine;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 800;
}

.text-u-header:first-of-type {
  animation: showup 3s ease;
}
.text-u-header2:first-of-type {
  animation: showup 3s ease-in-out;
}

.text-u-header:last-of-type {
  /* width: 0px; */
  animation: reveal 7s ease-in-out;
}
.text-u-header2:last-of-type {
  /* width: 0px; */
  animation: reveal 7s ease-in-out;
}

.text-u-header2:last-of-type span {
  /* margin-left: -413px; */
  animation: slidein 7s;
}
.flip-text {
  color: #66cc99;
  padding-left: 4px;
}
@keyframes showup {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slidein {
  0% {
    margin-left: -413px;
  }
  20% {
    margin-left: -413px;
  }
  35% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
}

@keyframes reveal {
  0% {
    opacity: 0;
    width: 0px;
  }
  20% {
    opacity: 1;
    width: 0px;
  }
  30% {
    width: 413px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    width: 413px;
  }
}
.index-2-cont {
  padding: 0;
}
.index-2-headertext {
  padding-top: 300px;
  justify-content: center;
}
.about-us {
  text-transform: uppercase;
  font-size: 75px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-2-uheader {
  text-align: center;
  padding-top: 0;
  font-size: 25px;
  font-family: 'Raleway';
}
.index-3-cont {
  padding: 0;
}
.index-3-headertext {
  padding-top: 200px;
  justify-content: center;
}

.our-services {
  text-transform: uppercase;
  font-size: 75px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-3-uheader {
  text-align: center;
  padding-top: 0;
  font-size: 25px;
  font-family: 'Raleway';
}

.index-3-c1-title {
  font-size: 40px;
  font-family: 'Raleway';
  text-transform: uppercase;
  color: #404a60;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  padding-top: 160px;
  line-height: 3.2rem;
  letter-spacing: 3px;
}
.index-3-c2-title {
  font-size: 40px;
  font-family: 'Raleway';
  text-transform: uppercase;
  color: whitesmoke;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  padding-top: 160px;
  line-height: 3.2rem;
  letter-spacing: 3px;
}
.index-3-c3-title {
  font-size: 40px;
  font-family: 'Raleway';
  text-transform: uppercase;
  color: #404a60;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  padding-top: 160px;
  line-height: 3.2rem;
  letter-spacing: 3px;
}
.index-3-c-text {
  font-family: 'Raleway';
  font-size: 18px;
  color: whitesmoke;
  padding-top: 0;
  letter-spacing: 2px;
}
.index-4-cont {
  padding: 0;
}
.index-4-headertext {
  padding-top: 300px;
  justify-content: center;
}
.our-expertise {
  text-transform: uppercase;
  font-size: 75px;
  font-family: 'Raleway';
  font-weight: normal;
}

.index-4-c1-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: #66cc99;
  text-align: center;
  justify-content: center;
  padding-bottom: 0;
}
.index-4-c2-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: #66cc99;
  justify-content: center;
  padding-bottom: 0;
}
.index-4-c3-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: #66cc99;
  justify-content: center;
  padding-bottom: 0;
}
.index-4-c1-text {
  text-align: left;
  padding-left: 170px;
  padding-top: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  line-height: 2.7rem;
  letter-spacing: 1.5px;
}
.index-4-c2-text {
  text-align: left;
  padding-left: 154px;
  padding-top: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  line-height: 2.7rem;
  letter-spacing: 1.5px;
}
.index-4-c3-text {
  text-align: left;
  padding-left: 170px;
  padding-top: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  line-height: 2.7rem;
  letter-spacing: 1.5px;
}

.index-5-cont {
  padding: 0;
}
.index-5-heading {
  background-color: #404a60;
}
.index-5-headertext {
  color: aquamarine;
  padding-top: 300px;
  padding-bottom: 50px;
  justify-content: center;
}
.what-we-do {
  text-transform: uppercase;
  font-size: 75px;
  font-family: 'Raleway';
  font-weight: normal;
}
/* .index-5-flex {
  padding: 0;
} */
.index-5-c1-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: whitesmoke;
  text-align: center;
  justify-content: center;
  padding-top: 0;
  /* padding-bottom: 0; */
}
.index-5-c2-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: whitesmoke;
  justify-content: center;
  padding-top: 0;
  /* padding-bottom: 0; */
}
.index-5-c3-title {
  text-transform: uppercase;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: bold;
  color: whitesmoke;
  justify-content: center;
  padding-top: 0;
  /* padding-bottom: 0; */
}
.index-5-c1-text {
  text-align: left;
  padding-left: 170px;
  padding-top: 0;
  padding-bottom: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  /* line-height: 2.7rem; */
  letter-spacing: 1.5px;
  color: whitesmoke;
}
.index-5-c2-text {
  text-align: left;
  padding-left: 154px;
  padding-top: 0;
  padding-bottom: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  /* line-height: 2.7rem; */
  letter-spacing: 1.5px;
  color: whitesmoke;
}
.index-5-c3-text {
  text-align: left;
  padding-left: 170px;
  padding-top: 0;
  padding-bottom: 0;
  font-family: 'Raleway';
  font-size: 19px;
  font-weight: 600;
  /* line-height: 2.7rem; */
  letter-spacing: 1.5px;
  color: whitesmoke;
}
.index-5-cont2 {
  padding: 0;
}
.index-5-card {
  color: #404a60;
}
.index-6-cont {
  padding: 0;
}
.index-6-headertext {
  padding-top: 300px;
  justify-content: center;
}
.why-choose-us {
  text-transform: uppercase;
  font-size: 75px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-6-uheader {
  text-align: center;
  padding-top: 0;
  font-size: 25px;
  font-family: 'Raleway';
}
</style>
