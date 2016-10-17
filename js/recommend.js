			var strForm ="<li class='mui-table-view-cell'><a href='#tabbar-childPage' class='mui-tab-item news-a' style='display: inline-block'> 《洛神域》公测355服“贪狼破军”10月14日10:00开启！</a> <span class='datespan'>10.13</span>  </li><li class='mui-table-view-cell'><a href='#tabbar-childPage' class='mui-tab-item news-a' style='display: inline-block'> 《弑天刃》62服“宣化承流”10月14日10:00 火爆开启！！！</a> <span class='datespan'>10.11</span></li><li class='mui-table-view-cell'><a href='#tabbar-childPage' class='mui-tab-item news-a' style='display: inline-block'>《九天仙境》193服“水榭听香”10月14日10：00火爆开启！！！</a> <span class='datespan'>8.7</span>  </li>"
			/*var strForm1 ="<li class='mui-table-view-cell'><a href='#tabbar-childPage' class='mui-tab-item news-a' style='display: inline-block'> 《弑天刃》62服“宣化承流”10月14日10:00 火爆开启！！！</a> <span class='datespan'>10.11</span></li>"
			var strForm2 ="<li class='mui-table-view-cell'><a href='#tabbar-childPage' class='mui-tab-item news-a' style='display: inline-block'>《九天仙境》193服“水榭听香”10月14日10：00火爆开启！！！</a> <span class='datespan'>8.7</span>  </li>"*/
		    $(document).ready(
				  function () {
					$("#load_more").click(function(){
						$(".add_list").append(strForm)/*.append(strForm1).append(strForm2)*/;
					})
				})