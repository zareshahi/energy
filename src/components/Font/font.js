import {Global} from "@emotion/react"

const Font = () => (
    <Global
        styles={`
            @font-face {
              font-family: "estedad";
              src: url("assets/font/estedad.woff2") format("woff2 supports variations"),
                   url("assets/font/estedad.woff2") format("woff2-variations");
                   font-weight: 100 1000;
            }
        `}
    />
)