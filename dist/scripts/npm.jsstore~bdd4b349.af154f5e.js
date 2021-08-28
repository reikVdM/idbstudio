(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{MSwd:function(e,t,n){e.exports=n.p+"scripts/jsstore.worker.ie.27f0dbbb09d6f849ea55bf4cd837316b.js"},S6P5:function(e,t,n){e.exports=n("uXZf")},uXZf:function(e,t){
/*!
 * @license :jsstore - V4.3.7 - 02/08/2021
 * https://github.com/ujjwalguptaofficial/JsStore
 * Copyright (c) 2021 @Ujjwal Gupta; Licensed MIT
 */
e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}({2:function(e,t,n){"use strict";n.r(t),n.d(t,"Connection",function(){return b}),n.d(t,"ERROR_TYPE",function(){return r}),n.d(t,"WORKER_STATUS",function(){return o}),n.d(t,"DATA_TYPE",function(){return i}),n.d(t,"API",function(){return u}),n.d(t,"EVENT",function(){return s}),n.d(t,"QUERY_OPTION",function(){return a}),n.d(t,"IDB_MODE",function(){return c}),n.d(t,"OCCURENCE",function(){return p}),n.d(t,"CONNECTION_STATUS",function(){return l}),n.d(t,"promise",function(){return h}),n.d(t,"promiseAll",function(){return v}),n.d(t,"promiseResolve",function(){return _}),n.d(t,"forObj",function(){return q});var r,o,i,u,s,a,c,p,l,d=function(){function e(e,t){this.type=e,this._info=t,this.message=this.getMsg()}return e.prototype.throw=function(){throw this},e.prototype.log=function(e){this.status&&console.log(e)},e.prototype.logError=function(){console.error(this.get())},e.prototype.logWarning=function(){console.warn(this.get())},e.prototype.get=function(){return{message:this.message,type:this.type}},e.prototype.getMsg=function(){return this.type,this.message},e}();!function(e){e.InvalidUpdateColumn="invalid_update_column",e.UndefinedColumn="undefined_column",e.UndefinedValue="undefined_value",e.UndefinedColumnName="undefined_column_name",e.UndefinedDbName="undefined_database_name",e.UndefinedColumnValue="undefined_column_value",e.NotArray="not_array",e.NoValueSupplied="no_value_supplied",e.ColumnNotExist="column_not_exist",e.EnableSearchOff="enable_search_off",e.InvalidOp="invalid_operator",e.NullValue="null_value",e.WrongDataType="wrong_data_type",e.TableNotExist="table_not_exist",e.DbNotExist="db_not_exist",e.ConnectionAborted="connection_aborted",e.ConnectionClosed="connection_closed",e.NotObject="not_object",e.InvalidConfig="invalid_config",e.DbBlocked="Db_blocked",e.IndexedDbNotSupported="indexeddb_not_supported",e.NullValueInWhere="null_value_in_where",e.InvalidJoinQuery="invalid_join_query",e.InvalidOrderQuery="invalid_order_query",e.InvalidQuery="invalid_query",e.InvalidGroupQuery="invalid_group_query",e.ImportScriptsFailed="import_scripts_failed",e.MethodNotExist="method_not_exist",e.Unknown="unknown",e.InvalidMiddleware="invalid_middleware"}(r||(r={})),function(e){e.Registered="registerd",e.Failed="failed",e.NotStarted="not_started"}(o||(o={})),function(e){e.String="string",e.Object="object",e.Array="array",e.Number="number",e.Boolean="boolean",e.Null="null",e.DateTime="date_time"}(i||(i={})),function(e){e.InitDb="init_db",e.Get="get",e.Set="set",e.Select="select",e.Insert="insert",e.Update="update",e.Remove="remove",e.OpenDb="open_db",e.Clear="clear",e.DropDb="drop_db",e.Count="count",e.ChangeLogStatus="change_log_status",e.Terminate="terminate",e.Transaction="transaction",e.CloseDb="close_db",e.Union="union",e.Intersect="intersect",e.ImportScripts="import_scripts",e.Middleware="middleware"}(u||(u={})),function(e){e.RequestQueueEmpty="requestQueueEmpty",e.RequestQueueFilled="requestQueueFilled",e.Upgrade="upgrade",e.Create="create",e.Open="open"}(s||(s={})),function(e){e.Where="where",e.Like="like",e.Regex="regex",e.In="in",e.Equal="=",e.Between="-",e.GreaterThan=">",e.LessThan="<",e.GreaterThanEqualTo=">=",e.LessThanEqualTo="<=",e.NotEqualTo="!=",e.Aggregate="aggregate",e.Max="max",e.Min="min",e.Avg="avg",e.Count="count",e.Sum="sum",e.Or="or",e.Skip="skip",e.Limit="limit",e.And="and",e.IgnoreCase="ignoreCase",e.Then="then"}(a||(a={})),function(e){e.ReadOnly="readonly",e.ReadWrite="readwrite"}(c||(c={})),function(e){e.First="f",e.Last="l",e.Any="a"}(p||(p={})),function(e){e.Connected="connected",e.Closed="closed",e.NotStarted="not_started",e.UnableToStart="unable_to_start",e.ClosedByJsStore="closed_by_jsstore"}(l||(l={}));var f,h=function(e){return new Promise(e)},_=function(e){return Promise.resolve(e)},y=function(){function e(e){this._events={},this._ctx=e}return e.prototype.on=function(e,t){return null==this._events[e]&&(this._events[e]=[]),this._events[e].push(t),this},e.prototype.off=function(e,t){if(this._events[e])if(t){var n=this._events[e].indexOf(t);this._events[e].splice(n,1)}else this._events[e]=[]},e.prototype.emit=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[e]||[],i=0,u=o.length,s=[],a=function(){var e=o[i++];if(e){var r=e.call.apply(e,function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e}([t._ctx],n));return r&&r.then?r:Promise.resolve(r)}};return new Promise(function(e){var t=function(){i<u?a().then(function(e){s.push(e),t()}):e(s)};t()})},e.prototype.destroy=function(){this._events=null,this._ctx=null},e}(),m=function(){function e(e){this.isConOpened_=!1,this.isDbIdle_=!0,this.requestQueue_=[],this.isCodeExecuting_=!1,this.inactivityTimer_=-1e3,this.middlewares=[],this.eventBus_=new y(this),this.whiteListApi_=[u.InitDb,u.OpenDb,u.Get,u.Set,u.ChangeLogStatus,u.Terminate,u.DropDb],this.isWorker=!0,this.logger=new d(null),e?(this.worker_=e,this.worker_.onmessage=this.onMessageFromWorker_.bind(this)):(this.isWorker=!1,this.initQueryManager_())}return Object.defineProperty(e.prototype,"jsstoreWorker",{get:function(){return this.$worker||self.JsStoreWorker},enumerable:!1,configurable:!0}),e.prototype.initQueryManager_=function(){var e=this.jsstoreWorker;e&&(this.queryManager=new e.QueryManager(this.processFinishedQuery_.bind(this)))},e.prototype.onMessageFromWorker_=function(e){this.processFinishedQuery_(e.data)},e.prototype.processFinishedQuery_=function(e){var t=this.requestQueue_.shift();if(t){if(this.logger.log("request "+t.name+" finished"),e.error)t.onError(e.error);else{switch(t.name){case u.OpenDb:case u.InitDb:this.isConOpened_=!0;break;case u.Terminate:this.isConOpened_=!1,!0===this.isWorker&&this.worker_.terminate();case u.DropDb:this.isConOpened_=!1,this.requestQueue_=[],this.isDbIdle_=!0;break;case u.CloseDb:this.requestQueue_.length>0?this.openDb_():(this.isDbIdle_=!0,this.eventBus_.emit(s.RequestQueueEmpty,[]))}t.onSuccess(e.result)}this.isCodeExecuting_=!1,this.executeQry_()}},e.prototype.openDb_=function(){this.prcoessExecutionOfQry_({name:u.OpenDb,query:{name:this.database.name,version:this.database.version},onSuccess:function(){},onError:function(e){console.error(e)}},0)},e.prototype.executeMiddleware_=function(e){var t=this;return h(function(n){var r=0,o=t.middlewares.length-1,i=function(){if(r<=o){var u=t.middlewares[r++](e);u&&u.then||(u=_(u)),u.then(function(e){i()})}else n()};i()})},e.prototype.callResultMiddleware=function(e,t){return h(function(n){var r=0,o=e.length-1,i=function(){if(r<=o){var u=e[r++](t);u.then||(u=_(u)),u.then(function(e){t=e,i()})}else n(t)};i()})},e.prototype.pushApi=function(e){var t=this;return new Promise(function(n,r){var o=[];e.onResult=function(e){o.push(function(t){return e(t)})},t.executeMiddleware_(e).then(function(){e.onSuccess=function(r){t.callResultMiddleware(o,r).then(function(e){n(e)}).catch(function(t){e.onError(t)})},e.onError=function(e){o=[],r(e)},0===t.requestQueue_.length&&(t.eventBus_.emit(s.RequestQueueFilled,[]),[u.CloseDb,u.DropDb,u.OpenDb,u.Terminate].indexOf(e.name)>=0||!t.isDbIdle_||!t.isConOpened_?clearTimeout(t.inactivityTimer_):t.openDb_()),t.prcoessExecutionOfQry_(e)}).catch(r)})},e.prototype.prcoessExecutionOfQry_=function(e,t){this.isDbIdle_=!1,null!=t?this.requestQueue_.splice(t,0,e):this.requestQueue_.push(e),this.logger.log("request pushed: "+e.name),this.executeQry_()},e.prototype.executeQry_=function(){var e=this,t=this.requestQueue_.length;if(!this.isCodeExecuting_&&t>0){if(!0===this.isConOpened_)return void this.sendRequestToWorker_(this.requestQueue_[0]);var n=this.requestQueue_.findIndex(function(t){return e.whiteListApi_.indexOf(t.name)>=0});n>=0&&(this.requestQueue_.splice(0,0,this.requestQueue_.splice(n,1)[0]),this.sendRequestToWorker_(this.requestQueue_[0]))}else 0===t&&!1===this.isDbIdle_&&this.isConOpened_&&(this.inactivityTimer_=setTimeout(function(){e.prcoessExecutionOfQry_({name:u.CloseDb,onSuccess:function(){},onError:function(e){console.error(e)}})},100))},e.prototype.sendRequestToWorker_=function(e){this.isCodeExecuting_=!0,this.logger.log("request executing: "+e.name);var t={name:e.name,query:e.query};!0===this.isWorker?this.worker_.postMessage(t):this.queryManager.run(t)},e}(),g=(f=function(e,t){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(e){function t(t){return e.call(this,t)||this}return g(t,e),t.prototype.initDb=function(e){var t=this;return this.database=e,this.pushApi({name:u.InitDb,query:e}).then(function(e){var n,r=e.database;return e.isCreated&&(n=e.oldVersion?t.eventBus_.emit(s.Upgrade,r,e.oldVersion,e.newVersion):t.eventBus_.emit(s.Create,r)),(n||_()).then(function(e){return t.eventBus_.emit(s.Open,r)}).then(function(t){return e.isCreated})})},t.prototype.dropDb=function(){return this.pushApi({name:u.DropDb})},t.prototype.select=function(e){return this.pushApi({name:u.Select,query:e})},t.prototype.count=function(e){return this.pushApi({name:u.Count,query:e})},t.prototype.insert=function(e){return this.pushApi({name:u.Insert,query:e})},t.prototype.update=function(e){return this.pushApi({name:u.Update,query:e})},t.prototype.remove=function(e){return this.pushApi({name:u.Remove,query:e})},t.prototype.clear=function(e){return this.pushApi({name:u.Clear,query:e})},Object.defineProperty(t.prototype,"logStatus",{set:function(e){this.logger.status=e,this.pushApi({name:u.ChangeLogStatus,query:e})},enumerable:!1,configurable:!0}),t.prototype.openDb=function(e,t){var n=this;return this.pushApi({name:u.OpenDb,query:{version:t,name:e}}).then(function(e){return n.database=e,e})},t.prototype.getDbList=function(){return console.warn("Api getDbList is recommended to use for debugging only. Do not use in code."),indexedDB.databases()},t.prototype.get=function(e){return this.pushApi({name:u.Get,query:e})},t.prototype.set=function(e,t){return this.pushApi({name:u.Set,query:{key:e,value:t}})},t.prototype.terminate=function(){return this.pushApi({name:u.Terminate})},t.prototype.transaction=function(e){return this.pushApi({name:u.Transaction,query:e})},t.prototype.on=function(e,t){this.eventBus_.on(e,t)},t.prototype.off=function(e,t){this.eventBus_.off(e,t)},t.prototype.union=function(e){return this.pushApi({name:u.Union,query:e})},t.prototype.intersect=function(e){return this.pushApi({name:u.Intersect,query:e})},t.prototype.addPlugin=function(e,t){return e.setup(this,t)},t.prototype.addMiddleware=function(e,t){return t?this.pushApi({name:u.Middleware,query:e}):(this.middlewares.push(e),Promise.resolve())},t.prototype.importScripts=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.pushApi({name:u.ImportScripts,query:e})},t}(m),v=function(e){return Promise.all(e)},q=function(e,t){for(var n in e)t(n,e[n])}}})}}]);