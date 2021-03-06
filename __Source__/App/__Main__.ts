//###  App  ###//
import {database as _database} from "./Database/__Main__"
import Settings                from "../Settings"
import {override_Help}         from "../Modules/CLI/Help"

//###  NPM  ###//
import Vorpal from "vorpal"


//#################################//
//###  Export.Namespace.Public  ###//
//#################################//

export namespace App{

	/** Returns the running `Vorpal` instance of the app. */
	export const instance = Vorpal()

	/** `Database` instance for persisting & managing user data. */
	export const database = _database

	/** Alias for `instance.command`. Registers a `Vorpal.Command` instance to the app, and returns it for further development. */
	export function command(definition:string)
		{return instance.command(definition)}

	/** Initializes the app & displays usage information. */
	export function start(){
		// initialize
		override_Help(instance)
		instance.delimiter(">")

		// print banner
		log(`\n${Settings.Output.AppStart.banner()}\n`)

		// show help
		instance.execSync("help")

		// start interaction
		instance.show()
	}

	/** Alias for `instance.execSync`. Executes the given `command`. */
	export function run(command:string)
		{return instance.execSync(command)}

	/** Alias for `instance.log`. */
	export function log(...args:any[])
		{instance.log(...args)}

	/** `log`s a blank line. */
	export function newLine()
			{instance.log()}

}


//####################//
//###  Initialize  ###//
//####################//

import "./Commands/Find/__Main__"
import "./Commands/List/__Main__"

