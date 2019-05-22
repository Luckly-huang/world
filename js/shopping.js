//获取选择框
var allCheckBox = $("#allCheckBox")[0]
console.log(allCheckBox)
//获取加减号
var hands = document.getElementsByClassName('hand')
console.log(hands)
//单价
var prices = document.getElementsByClassName('cart_td_5')
//积分
var integrals = document.getElementsByClassName('cart_td_4')
//输入数量
var num_inputs = document.getElementsByClassName('num_input')
//小计
var subtotals = document.getElementsByClassName('cart_td_7')
// 总金额
var total = document.getElementById('total')
// 总积分
var integral = document.getElementById('integral')
// 获取到数组
var inputs = document.getElementsByName("cartCheckBox")
console.log(inputs)
// 找到删除按钮数组
var deletes = document.getElementsByClassName('cart_td_8')
// 找到【删除】所选按钮
var deleteAll = document.getElementById('deleteAll')
console.log(deleteAll)
// 全选和全不选的效果
allCheckBox.onchange =function(){
	var checked = allCheckBox.checked
	for (var i = 0; i < inputs.length; i++){
		inputs[i].checked = checked
		//计算总金额
		totalAndInterralCalculate()
		}
	}
//监听删除所选按钮
deleteAll.onclick = function(){
	//遍历所有的input勾选框
	for ( var i = 0; i < inputs.length; i++){
		if(inputs[i].checked){
//			console.log("苹果")
			//找相应的节点，进行remove操作
			//上一个父节点的父节点的上面一个兄弟元素删除掉
			inputs[i].parentElement.parentElement.previousElementSibling.remove()
			//上一个父节点的父节点也就是td上面的tr
			inputs[i].parentElement.parentElement.remove()
			//计算总金额
			totalAndInterralCalculate()
			//重复确认
			i--
		}
	}
}
//点击加减号可以增加货物数量
function addAndReduceNumber(){
	//遍历加减数量
	for(var i = 0; i < hands.length; i ++){
		if(i % 2 === 1){
			//下标量为0和1  1是加号 0是负号 如果i%2 等于1 那就是加号
			hands[i].onclick = function(){
				this.previousElementSibling.value++
				//实时计算【小计功能】
				subtotalsCalculate()
				//实时计算【总金额】和 总积分 的功能
				totalAndInterralCalculate()
			}
		}else{
			//否则就是减号
			hands[i].onclick = function(){
				//如果表单的默认值为1的话
				if(this.nextElementSibling.value == 1){
					alert('宝贝数量得加一,不能再减')
				}else{
					this.nextElementSibling.value--
					// 实时计算【小计】的功能
					subtotalsCalculate()
					// 实时计算【总金额】和【总积分】的功能
					totalAndInterralCalculate()
				}
			}
		}
	}
}
//这里调用函数
addAndReduceNumber()
//=============================
//计算小计的金额
function subtotalsCalculate(){
	//遍历每个【单价】
	for (var i = 0; i < prices.length; i++){
		subtotals[i].innerHTML = parseFloat(prices[i].innerHTML) * num_inputs[i].value
	}
}
//执行【小计】函数
subtotalsCalculate()
//实时计算总金额 和 总计分
function totalAndInterralCalculate(){
	var sum = 0
	var score = 0
	for (var i = 0; i < subtotals.length; i++){
		//如果前面的勾选框 为勾选状态
		if(inputs[i].checked){
			//计算总金额
			sum += parseFloat(subtotals[i].innerHTML)
			//计算总积分
			score += parseFloat(integrals[i].innerHTML) * num_inputs[i].value
		}
	}
	//给总金额赋值
	total.innerHTML = sum
	console.log(sum)
	//给总积分赋值
	integral.innerHTML = score
}
//执行计算 总金额 和 总积分 的函数
totalAndInterralCalculate()
//删除功能
for (var i = 0; i < deletes.length; i++){
	deletes[i].firstElementChild.onclick = function(){
		//找到相应的节点，进行remove操作
		this.parentElement.parentElement.previousElementSibling.remove()
		this.parentElement.parentElement.remove()
		//【总金额】和【总积分】需要重新计算
		totalAndInterralCalculate()
	}
}
//监听勾选框的状态变化
for (var i = 0; i < inputs.length; i ++){
	//如果监听到勾选框有变化
	inputs[i].onchange = function(){
		//就重新计算总金额和总积分
		totalAndInterralCalculate()
	}
}

	


