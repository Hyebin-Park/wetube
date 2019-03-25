// *** server 코드와 연동시키지 말 것. 100% client 코드
// babel-node와 관련이 없기 때문에 es6 사용 불가

// path : 파일, 폴더 경로 작업을 돕는 유틸리티를 제공하는 node.js 모듈
const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV; 

// 파일들이 어디에서 왔는 지에 관한 것
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js" )
// 파일들을 어디에 내보낼지에 관한 것
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    // entry: 의존성 그래프의 시작점
    entry: ENTRY_FILE,
    mode: MODE,

    // 모듈을 발견할 때 마다, 아래의 rule을 따르도록 한다.
    module: {

        rules : [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            }
        ],
        // 컴파일 된 css를 별도의 css파일로 분리해서 하나의 파일로 번들링할 것임
        rules: [
            // loader : test(로딩할 파일 지정), use(적용할 로더를 설정))키로 구성된 객체로 설정하며, 
            // 비 자바스크립트 파일을 웹팩이 이해하게끔 변경한다. 역순으로 실행됨
            {    
                test: /\.scss$/,

                // 별도의 css 텍스트를 추출하는 플러그인(번들된 결과물을 처리)
                use: ExtractCSS.extract([      
                    {
                        loader: "css-loader"

                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins() {
                                return [autoprefixer({ browsers: "cover 99.5%" })];
                            }
                        }

                    },
                    {
                        loader: "sass-loader"
                    }
                ])
            }

        ]

    },
    // 엔트리에 설정한 파일을 시작으로 의존되어 있는 모든 모듈이 번들된 결과물을 처리할 경로/파일명을 정함
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [
        // styles.css로 번들링
        new ExtractCSS('styles.css')
      ],
};

module.exports = config