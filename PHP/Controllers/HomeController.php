<?php
/*
 * Classe controller da pagina home
*/

namespace Controllers;

class HomeController extends Controller
{
    public function __construct($view, $model)
    {
        parent::__construct($view, $model);
    }
    public function index()
    {
        $this->view->render("home", 'Home');
    }
}
