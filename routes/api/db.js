/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

import {
  getDB
} from "../../libs/database.js"

export default function handle(req){
  getDB();
	return new Response('',{status:200});
}