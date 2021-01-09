import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://s.alicdn.com/@banner/montage/184481-11d09e5a2a8fb530c67d812c2dd24490.jpg?content=%7B%2211%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40img%2Ftfs%2FTB1QCSK4VP7gK0jSZFjXXc5aXXa-990-400.png%22%2C%22demo%22%3A%22%22%7D%7D%2C%2212%22%3A%7B%22attrs%22%3A%7B%22verticalAlign%22%3A%22top%22%2C%22mini%22%3Afalse%2C%22fontSize%22%3A%2220%22%2C%22lineHeight%22%3A%2224%22%2C%22align%22%3A%22left%22%2C%22value%22%3A%22Industrial++Manufacturing%2C+Home%2C+and+Lifestyle%22%7D%7D%2C%2216%22%3A%7B%22attrs%22%3A%7B%22verticalAlign%22%3A%22top%22%2C%22mini%22%3Afalse%2C%22fontSize%22%3A%2230%22%2C%22lineHeight%22%3A%2236%22%2C%22align%22%3A%22left%22%2C%22value%22%3A%22Shenzhen+Online+Mega+Expo%22%7D%7D%2C%2220%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40img%2Ftfs%2FTB1MP5M4EH1gK0jSZSyXXXtlpXa-251-38.png%22%7D%7D%2C%2210%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40sc01%2Fkf%2FHb60cbcb33fa34c708a96cafee7e7c651j.jpg_300x300.jpg%22%7D%7D%7D&channel=25",
  },
  {
    src:
      "https://s.alicdn.com/@banner/montage/184481-7614b8e019cc3c8141552f99500e1764.jpg?content=%7B%2211%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40img%2Fimgextra%2Fi1%2FO1CN01ykVz2D27XejiEidA7_%21%216000000007807-2-tps-990-400.png%22%2C%22demo%22%3A%22%22%7D%7D%2C%2212%22%3A%7B%22attrs%22%3A%7B%22verticalAlign%22%3A%22top%22%2C%22mini%22%3Afalse%2C%22fontSize%22%3A%2220%22%2C%22lineHeight%22%3A%2224%22%2C%22align%22%3A%22left%22%2C%22value%22%3A%222021+Consumer+Electronics+%26+Home+Appliances%22%7D%7D%2C%2216%22%3A%7B%22attrs%22%3A%7B%22verticalAlign%22%3A%22top%22%2C%22mini%22%3Afalse%2C%22fontSize%22%3A%2230%22%2C%22lineHeight%22%3A%2236%22%2C%22align%22%3A%22left%22%2C%22value%22%3A%22Electronics+Online+Trade+Show%22%7D%7D%2C%2220%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40img%2Ftfs%2FTB1MP5M4EH1gK0jSZSyXXXtlpXa-251-38.png%22%7D%7D%2C%2210%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40sc01%2Fkf%2FH6909447abab148938b9cc0db65fb2969C.jpg_300x300.jpg%22%7D%7D%7D&channel=25",
  },
  {
    src:
      "https://img.alicdn.com/tfs/TB1e.XyReL2gK0jSZFmXXc7iXXa-990-400.png",
  }
];

const CarouselIntro = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem className="text-center"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="mw-100" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselIntro