import React from "react";
import { Link } from "common/components/base/navigation/link/link";
import { Block } from "common/components/layout/block/block";

const images = [
  {
    alt: "Milky way in San Jose with tree",
    href: "https://www.instagram.com/p/BIRNULZhYdJ/",
    isPortrait: true,
    offset: "-37px",
    src: "/images/pages/about/photography-1.jpg",
  },
  {
    alt: "Fireworks in Seattle on Fourth of July",
    href: "https://www.instagram.com/p/BWbGXupnBb_/",
    isPortrait: false,
    offset: "-30px",
    src: "/images/pages/about/photography-2.jpg",
  },
  {
    alt: "Manhattan skyline at sunset from DUMBO, NYC",
    href: "https://www.instagram.com/p/B1AAw-ojAzx/",
    isPortrait: false,
    offset: "-60px",
    src: "/images/pages/about/photography-3.jpg",
  },
  {
    alt: "Milky way on a cloudy night at Joshua Tree, LA",
    href: "https://www.instagram.com/p/BI3aKLDhFnb/",
    isPortrait: false,
    offset: "-15px",
    src: "/images/pages/about/photography-4.jpg",
  },
];

export const Photographer = (): JSX.Element => {
  const phantom = (
    <Block
      height={0}
      width="180px"
      marginLeft="10px"
      marginRight="10px"
      $style={{ visibility: "hidden" }}
    />
  );

  return (
    <Block display="flex" flexWrap justifyContent="space-around">
      {images.map((image) => (
        <Block
          height="225px"
          margin="10px"
          width="180px"
          $style={{
            boxShadow: "0 1px 5px 0 #202020",
            opacity: 0.8,
            overflow: "hidden",
            ":hover": {
              opacity: 1,
            },
          }}
        >
          <Link href={image.href}>
            <img
              alt={image.alt}
              key={image.src}
              src={image.src}
              style={
                image.isPortrait
                  ? {
                      marginTop: image.offset,
                      height: "auto",
                      maxWidth: "100%",
                    }
                  : {
                      marginLeft: image.offset,
                      maxHeight: "100%",
                      width: "auto",
                    }
              }
            />
          </Link>
        </Block>
      ))}
      {phantom}
      {phantom}
    </Block>
  );
};
