// the file to get make the crud operations in postgresql 


import { client } from './connector_sql';  // import the clinedt



// Make sure 'client' is passed to the constructor
class Helper_Fun 

{

  client : any;  // Use the appropriate type for 'client'

  constructor(client: any ) {
    this.client = client ;
  }

  add_value() 
  {
  	/*
	The function to add the value in sql 
  	*/

  }

  update_value()
  {
  	/*
	the fucnttion to update the value in sql
  	*/


  }

  delete_value()
  {
  	/*
	The function to delete the value in the sql
  	*/



  }

  search_value()
  {
  	/*
	The function to search the value in the sql
  	*/

  }



}






// Make the helper function and pass 'client' to the constructor
const helper_fun = new Helper_Fun(client);

console.log(helper_fun.client );

