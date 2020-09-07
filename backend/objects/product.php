<?php
	class Product{
  
		// database connection and table name
    private $conn;
    private $table_name = "produtos";
  
    public $codigo;
    public $nome;
	  public $preco;
  
    // constructor with $db as database connection
    	    	public function __construct($db){
        		$this->conn = $db;
    }

		// read products
		function read(){
  
    			// select all query
    			$query = "SELECT
            		codigo, nome, preco
    			FROM
            		" . $this->table_name . " 
    			ORDER BY nome ASC";
  
    			// prepare query statement
    			$stmt = $this->conn->prepare($query);
  
    			// execute query
    			$stmt->execute();
  
    			return $stmt;
		}  
  
	}
?>
