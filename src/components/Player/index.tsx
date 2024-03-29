import { IframeHTMLAttributes, FC } from 'react';

export interface IPlayer extends IframeHTMLAttributes<HTMLIFrameElement> {
  src: string,
  frameBorder: string,
  scrolling: string,
  width: string,
  height: string
}

import * as Atom from './style';

export const Player: FC<IPlayer> = ({ src, frameBorder, scrolling, width, height }) => {
  return (
    <Atom.IFrame
      src={src}
      frameBorder={frameBorder}
      scrolling={scrolling}
      width={width}
      height={height}
    >
    </Atom.IFrame>
  )
}