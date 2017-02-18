// Copyright (c) 2014-2017, MyMonero.com
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//	conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//	of conditions and the following disclaimer in the documentation and/or other
//	materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//	used to endorse or promote products derived from this software without specific
//	prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
"use strict"
//
const View = require('../../Views/View.web')
//
class FundsRequestsListCellView extends View
{
	constructor(options, context)
	{
		super(options, context)
		//
		const self = this
		{
			self.cell_tapped_fn = options.cell_tapped_fn || function(cellView) {}
		}
		self.setup()
	}
	setup()
	{
		const self = this
		self.setup_views()
		self.setup_layers()
	}
	setup_views()
	{
		const self = this
	}
	setup_layers()
	{
		const self = this
		//
		self.layer.style.border = "1px solid #eee"
		self.layer.style.cursor = "pointer"
		//
		self.setup_layers_fundsRequestInfo()
	}
	setup_layers_fundsRequestInfo()
	{
		const self = this
		//
		const layer = document.createElement("div")
		//
		self.layer_fundsRequestInfo = layer
		self.layer.appendChild(layer)
		{ // observation
			layer.addEventListener(
				"click",
				function(e)
				{
					e.preventDefault() // not that there would be any
					self.cell_tapped_fn(self)
					//
					return false
				}
			)
		}
	}
	//
	//
	// Internal - Teardown/Recycling
	//
	prepareForReuse()
	{
		const self = this
		self.stopObserving_fundsRequest()
		self.fundsRequest = null
	}
	stopObserving_fundsRequest()
	{
		const self = this
		if (typeof self.fundsRequest === 'undefined' || !self.fundsRequest) {
			return
		}
		function doesListenerFunctionExist(fn)
		{
			if (typeof fn !== 'undefined' && fn !== null) {
				return true
			}
			return false
		}
	}
	//
	//
	// Interface - Runtime - Imperatives - State/UI Configuration
	//
	ConfigureWith_fundsRequest(fundsRequest)
	{
		const self = this
		if (typeof self.fundsRequest !== 'undefined') {
			self.prepareForReuse()
		}
		self.fundsRequest = fundsRequest
		self._configureUIWithFundsRequest()
		self.startObserving_fundsRequest()
	}
	//
	//
	// Internal - Runtime - Imperatives - State/UI Configuration
	//
	_configureUIWithFundsRequest()
	{
		const self = this
		self._configureUIWithFundsRequest__fundsRequestInfo()
	}
	_configureUIWithFundsRequest__fundsRequestInfo()
	{
		const self = this
		const fundsRequest = self.fundsRequest
		var htmlString = ''
		htmlString += `<p>${fundsRequest.Lazy_URI()}</p>`
		// TODO: rewrite this with elements per design - do we need a delete btn? 
		self.layer_fundsRequestInfo.innerHTML = htmlString
	}
	//
	//
	// Internal - Runtime - Imperatives - FundsRequest operations
	deleteFundsRequest()
	{
		const self = this
		self.context.fundsRequestsListController.WhenBooted_DeleteRecordWithId(
			self.fundsRequest._id,
			function(err)
			{
				if (err) {
					console.error("Failed to delete fundsRequest with error", err)
					alert("Failed to delete fundsRequest.")
					return
				}
				console.log("Deleted fundsRequest.")
			}
		)
	}
	//
	//
	//
	// Internal - Runtime - Imperatives - Observation
	//
	startObserving_fundsRequest()
	{
		const self = this
		if (typeof self.fundsRequest === 'undefined' || self.fundsRequest === null) {
			throw "fundsRequest undefined in start observing"
			return
		}
		// ntd yet
	}
	//
	//
	// Internal - Runtime - Delegation - Event handlers - FundsRequest
	//
	// nothing yet
}
module.exports = FundsRequestsListCellView
