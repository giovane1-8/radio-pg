import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route
} from 'react-router-dom';

import { Root } from './Root';

import { Home } from '../pages/Home';
import { Sobre } from '../pages/Sobre';
import { AsMelhores } from '../pages/AsMelhores';
import { PedirUmaMusica } from '../pages/PedirUmaMusica';
import { HallDosPremiados } from '../pages/HallDosPremiados';
import { Parceiros } from '../pages/Parceiros';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path='/as-melhores' element={<AsMelhores />} />
      <Route path='/perdir-uma-musica' element={<PedirUmaMusica />} />
      <Route path='/hall-dos-premiados' element={<HallDosPremiados />} />
      <Route path='/parceiros' element={<Parceiros />} />
    </Route>
  )
);