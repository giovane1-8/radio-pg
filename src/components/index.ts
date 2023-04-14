import { lazy } from 'react'

const InitialBanner = lazy(() => import('./InitialBanner'))
const Sobre = lazy(() => import('./Sobre'))
const BannerPromocional = lazy(() => import('./BannerPromocional'))
const PedirUmaMusica = lazy(() => import('./PedirUmaMusica'))
const KarineOuriques = lazy(() => import('./KarineOuriques'))
const FervendoNaPG = lazy(() => import('./FervendoNaPG'))
const Depoimentos = lazy(() => import('./Depoimentos'))
const Parceiros = lazy(() => import('./Parceiros'))
const Footer = lazy(() => import('./Footer'))
const Alert = lazy(() => import('./Alert'))
// const Player = lazy(() => import('./Player'))
const Loader = lazy(() => import('./Loader'))

import { Player } from './Player'

export {
  InitialBanner,
  Sobre,
  BannerPromocional,
  PedirUmaMusica,
  KarineOuriques,
  FervendoNaPG,
  Depoimentos,
  Parceiros,
  Footer,
  Alert,
  Player,
  Loader
}