import { 
  Link, 
  Outlet
} from 'react-router-dom'

export const Root = () => {
  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/sobre'>Sobre nós</Link>
        <Link to='/as-melhores'>As melhores</Link>
        <Link to='/perdir-uma-musica'>Pedir uma música</Link>
        <Link to='/hall-dos-premiados'>Hall dos premiados</Link>
        <Link to='/parceiros'>Parceiros</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  )
}