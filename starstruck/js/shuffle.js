//入替え画像リスト
var shuffle_list_works01=[ 
{cl:'pic x1' ,src:'tx1_001.jpg'},
{cl:'pic x1' ,src:'tx1_002.jpg'},
{cl:'pic x1' ,src:'tx1_003.jpg'},
{cl:'pic' ,src:'tx2_001.jpg'},
{cl:'pic' ,src:'tx2_002.jpg'},
{cl:'pic' ,src:'tx2_003.jpg'},
{cl:'pic' ,src:'tx2_004.jpg'},
{cl:'pic' ,src:'tx2_005.jpg'},
{cl:'pic' ,src:'tx2_006.jpg'},
{cl:'pic' ,src:'tx2_007.jpg'},
{cl:'pic x3' ,src:'tx3_001.jpg'},
{cl:'pic x3' ,src:'tx3_002.jpg'},
{cl:'pic x4' ,src:'tx4_001.jpg'},
{cl:'pic x4' ,src:'tx4_002.jpg'},
{cl:'pic x4' ,src:'tx4_003.jpg'},
{cl:'pic x4' ,src:'tx4_004.jpg'},
{cl:'pic x5' ,src:'tx5_001.jpg'},
{cl:'pic x5' ,src:'tx5_002.jpg'},
{cl:'pic x5' ,src:'tx5_003.jpg'},
{cl:'pic x0' ,src:'x0_001.jpg'},
{cl:'pic x1' ,src:'x1_001.jpg'},
{cl:'pic x1' ,src:'x1_002.jpg'},
{cl:'pic' ,src:'x2_001.jpg'},
{cl:'pic' ,src:'x2_002.jpg'},
{cl:'pic' ,src:'x2_003.jpg'},
{cl:'pic' ,src:'x2_004.jpg'},
{cl:'pic' ,src:'x2_005.jpg'},
{cl:'pic' ,src:'x2_006.jpg'},
{cl:'pic x3' ,src:'x3_001.jpg'},
{cl:'pic x3' ,src:'x3_002.jpg'},
{cl:'pic x3' ,src:'x3_003.jpg'},
{cl:'pic x3' ,src:'x3_004.jpg'},
{cl:'pic x3' ,src:'x3_005.jpg'},
{cl:'pic x3' ,src:'x3_006.jpg'},
{cl:'pic x4' ,src:'x4_001.jpg'},
{cl:'pic x4' ,src:'x4_002.jpg'},
{cl:'pic x4' ,src:'x4_003.jpg'},
{cl:'pic x4' ,src:'x4_004.jpg'},
{cl:'pic x4' ,src:'x4_005.jpg'},
{cl:'pic x5' ,src:'x5_001.jpg'},

];

function remakeImage(list,id,num){
  //出力する画像をランダムに選び出す
  var out=[];
  for(var n=0; n<num; n++){
    var idx=Math.floor( Math.random() * list.length ); //listの長さ分の乱数を生成
    out.push(list[idx]); //出力リストに追加
    list.splice(idx,1); //重複して選ばれない様にリストから削除
  }


  for(var i=0; i < out.length; i++){
    var l=out[i];
	var img='<img src="img/works/'+l.src+'" alt="w0">';
	var div;
	if(l.href){
	  div=$('<div class="'+l.cl+'"><a href="'+l.href+'" data-lightbox="Work_dsc" ><img src="img/works/'+l.src+'" alt="w0"></a></div>');
	}else{
      div=$('<div class="'+l.cl+'"><img src="img/works/'+l.src+'" alt="w0"></div>');    		
	}

	
    //var div=$('<div class="'+l.cl+'"><img src="img/works/'+l.src+'" alt="w0"></div>');
    $(id).prepend(div);
  }
}

remakeImage(
  shuffle_list_works01, //表示する画像リスト
  "#works01", //div id
  30 //表示画像リストから何枚選んで表示するか
);
