<?php
require_once('init.php');

class Messages {

    private $doAction;
    private $db;
    //Do actions
    const ACTIONS = [
        'GET_SELLERS' => 'getSellers'
    ];

    function __construct()
    {   
        $this->doAction = $_REQUEST['doAction'];
        $this->db =  MysqliDb::getInstance();
      //$this->dbSmaPr =  $this->db->connection('sma_pr');
        $this->init( $this->doAction);
    }

    /**
     * Init function
     *
     * @param string $doAction
     * @return void
     */
    private function init(string $doAction) {
        switch($doAction) {
            case self::ACTIONS['GET_SELLERS']: 
                $this->getSellers();
            break;
        }
    }

    /**
     * Get Sellers List function
     *
     * @return void
     */
    private function getSellers() {
        die(json_encode($this->db->get('user')));
    }

    function __destruct()
    {
        MysqliDb::getInstance()->disconnectAll();
    }
}

$obj = new Messages();