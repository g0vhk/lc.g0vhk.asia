angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/about.html', [
'<div class="about"><h1>This is pre-alpha!</h1></div><h2>Source code</h2><a href="https://github.com/g0v/ly.g0v.tw">Source code</a> is available on github.com and under<a href="http://g0v.mit-license.org/"> MIT License</a><h2>Icon attributions</h2><ul class="attribution"><li><a href="http://thenounproject.com/noun/judge/#icon-No3953" target="_blank">Judge</a>designed by<a href="http://thenounproject.com/Luis" target="_blank">Luis Prado</a>from The Noun Project</li><li><a href="http://thenounproject.com/noun/antenna/#icon-No10279" target="_blank">Antenna</a>designed by<a href="http://thenounproject.com/rocavence" target="_blank">Roca Chang</a>from The Noun Project</li><li><a href="http://thenounproject.com/noun/earth/#icon-No4570" target="_blank">Earth</a>designed by<a href="http://thenounproject.com/thibault.geffroy" target="_blank">Thibault Geffroy</a>from The Noun Project</li><li><a href="http://thenounproject.com/noun/institution/#icon-No1564" target="_blank">Institution</a>designed by<a href="http://thenounproject.com/thibault.geffroy" target="_blank">Thibault Geffroy</a>from The Noun Project</li></ul><h2>Icons by Alice, ETBlue and WalkingIce</h2><div class="g0v-icon-list"><div class="item"><i class="g0v-icon KMT large"></i><div class="desc">國民黨黨徽  <div class="note">( i.g0v.icon.KMT )</div></div></div><div class="item"><i class="g0v-icon DPP large"></i><div class="desc">民進黨黨徽  <div class="note">( i.g0v-icon.DPP )</div></div></div><div class="item"><i class="g0v-icon PFP large"></i><div class="desc">親民黨黨徽  <div class="note">( i.g0v-icon.PFP )</div></div></div><div class="item"><i class="g0v-icon TSU large"></i><div class="desc">台灣團結聯盟黨徽  <div class="note">( i.g0v-icon.TSU )</div></div></div><div class="item"><i class="g0v-icon NSU large"></i><div class="desc">無黨籍聯盟黨徽  <div class="note">( i.g0v-icon.NSU )</div></div></div><div class="item"><i class="g0v-icon NON large"></i><div class="desc">無黨籍  <div class="note">( i.g0v-icon.NON )</div></div></div><div class="item"><i class="g0v-icon CON large"></i><div class="desc">修憲委員會  <div class="note">( i.g0v-icon.CON )</div></div></div><div class="item"><i class="g0v-icon DIS large"></i><div class="desc">紀律委員會  <div class="note">( i.g0v-icon.DIS )</div></div></div><div class="item"><i class="g0v-icon FIN large"></i><div class="desc">財政委員會  <div class="note">( i.g0v-icon.FIN )</div></div></div><div class="item"><i class="g0v-icon EDU large"></i><div class="desc">教育及文化委員會  <div class="note">( i.g0v-icon.EDU )</div></div></div><div class="item"><i class="g0v-icon ECO large"></i><div class="desc">經濟委員會  <div class="note">( i.g0v-icon.ECO )</div></div></div><div class="item"><i class="g0v-icon FND large"></i><div class="desc">外交與國防委員會  <div class="note">( i.g0v-icon.FND )</div></div></div><div class="item"><i class="g0v-icon IAD large"></i><div class="desc">內政委員會  <div class="note">( i.g0v-icon.IAD )</div></div></div><div class="item"><i class="g0v-icon JUD large"></i><div class="desc"> 司法與法制委員會  <div class="note">( i.g0v-icon.JUD )</div></div></div><div class="item"><i class="g0v-icon PRO large"></i><div class="desc">程序委員會  <div class="note">( i.g0v-icon.PRO )</div></div></div><div class="item"><i class="g0v-icon SWE large"></i><div class="desc">社會福利及衛生環境委員會  <div class="note">( i.g0v-icon.SWE )</div></div></div><div class="item"><i class="g0v-icon TRA large"></i><div class="desc">交通委員會  <div class="note">( i.g0v-icon.TRA )</div></div></div><div class="item"><i class="g0v-icon YS large"></i><div class="desc">院會  <div class="note">( i.g0v-icon.YS )</div></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/bills.html', [
'<div class="bill"><h1 title="{{summary}}" class="bill">{{summary}}</h1><div ng-if="bill_ref" class="bill-progress"><div class="common ui seven steps"><span ng-repeat="step in steps" class="stage"><a ng-click="showSub($index)" ng-class="step.status.step" class="ui step"><div class="step-description">{{step.description}}</div><div class="date">{{step.date}}</div></a><div ng-class="step.status.state" class="ui state"><i ng-class="step.status.icon" class="icon"></i></div></span></div><div ng-repeat="step in steps" class="ui small steps"><span ng-show="step.sub" ng-repeat="substep in step.detail" class="stage"><div ng-class="substep.status.step" class="ui step"><div class="substep-description">{{substep.description}}<i ng-show="substep.links" class="icon archive">p.</i><span ng-repeat="l in substep.links"><a target="_blank" ng-href="{{l.link}}">{{l.text}}</a></span></div><div class="date">{{substep.date}}</div></div><div ng-class="substep.status.state" class="ui state"><i ng-class="substep.status.icon" class="icon"></i></div></span></div></div><div ng-if="ttsmotions" class="ui list ttsmotions"><div class="item"><i class="icon exclamation"></i>這應該要整合到上面的列表，但是還沒做好</div><div ng-repeat="ttsmotion in ttsmotions" class="item"><div class="content"><a class="header"><span ng-show="opts.show_date" ng-click="opts.show_date=!opts.show_date" class="date">{{ttsmotion.date | date:\'yyyy-MM-dd\' }}</span><span ng-show="!opts.show_date" ng-click="opts.show_date=!opts.show_date" class="sitting">{{ttsmotion.sitting_id}}</span>{{ttsmotion.progress || ttsmotion.summary}}</a><div class="description">{{ ttsmotion.resolution }}<i ng-show="ttsmotion.links" class="icon archive">p.</i><span ng-repeat="l in ttsmotion.links"><a target="_blank" ng-href="{{l.link}}">{{l.text}}</a></span></div></div></div></div><div class="summary"><div class="links ui vertical menu right floated"><div ng-show="bill_ref" class="item"><h4>提案編號 {{ bill_ref }}</h4></div><div id="qrlink" class="item center right"><qrcode text="http://ly.g0v.tw/bills/{{bill_ref || bill_id}}" size="120"></qrcode></div><div class="item hide-print"><i class="code icon"></i><a ng-href="http://api.ly.g0v.tw/v0/collections/bills/{{bill_ref || bill_id}}" target="_blank">JSON</a></div><div ng-show="report.doc.pdf" class="item hide-print"><i class="file icon"></i><a ng-href="{{report.doc.pdf}}" target="_blank">審查報告</a></div><div ng-show="doc.pdf" class="item hide-print"><i class="file icon"></i><a ng-href="{{doc.pdf}}" target="_blank">PDF</a></div><div ng-show="doc.doc" class="item hide-print"><i class="file icon"></i><a ng-href="{{doc.doc}}" target="_blank">Word</a></div></div><p class="description">{{abstract}}</p></div><div class="role"><div ng-show="committee" class="committee"><ul><li ng-repeat="c in committee"><span><img ng-src="http://avatars.io/50a65bb26e293122b0000073/committee-{{c.abbr}}?size=medium" ng-alt="{{c.name}}" ng-class="{{c.abbr}}" class="avatar medium"/><span class="name">{{c.name}}委員會</span></span></li></ul></div><div class="clearfix"></div><h2 class="ui horizontal divider">提案人</h2><div ng-show="sponsors" class="sponsors"><div ng-repeat="e in sponsors" class="item"><div class="image ui rounded corner hide-print"><img ng-src="http://avatars.io/50a65bb26e293122b0000073/{{e.avatar}}?size=medium" ng-alt="{{e.name}}" ng-class="e.party" class="avatar"/></div><div class="content"><div class="name">{{e.name}}</div></div><span class="infocard"><b></b><a href="http://fact.g0v.tw/wiki/{{e.name}}" target="blank" class="fact text">生平時間軸</a><a href="http://zh.wikipedia.org/wiki/{{e.name}}" target="blank" class="wiki text">Wikipedia</a></span></div></div><div class="clearfix"></div><h2 class="ui horizontal divider">連署人</h2><div ng-show="cosponsors" class="cosponsors"><div ng-repeat="e in cosponsors" class="item"><div class="image ui rounded corner hide-print"><img ng-src="http://avatars.io/50a65bb26e293122b0000073/{{e.avatar}}?size=small" ng-alt="{{e.name}}" ng-class="e.party" class="avatar"/></div><div class="content"><div class="name">{{e.name}}</div></div><span class="infocard"><b></b><a href="http://fact.g0v.tw/wiki/{{e.name}}" target="blank" class="fact text">生平時間軸</a><a href="http://zh.wikipedia.org/wiki/{{e.name}}" target="blank" class="wiki text">Wikipedia</a></span></div></div></div><div class="clearfix"></div><div class="history"></div><div class="clearfix"></div><div ng-show="related" class="related"><ul><li ng-repeat="r in related"><span><img ng-show="r.avatar" ng-src="http://avatars.io/50a65bb26e293122b0000073/{{r.avatar}}?size=small" ng-alt="{{r.name}}" ng-class="r.party" class="avatar"/><span class="summary">{{r.summary}}</span></span></li></ul></div><div class="clearfix"></div><div ng-repeat="(i, d) in diff" class="content default"><a name="{{d.name}}"></a><h2 class="ui horizontal divider">{{d.name}}</h2><p class="sample"><span ng-hide="!d.diffbase" class="delete">{{d.diffbase}}</span><span ng-hide="!d.diffbase">vs</span><span ng-repeat="v in d.versions" ng-class="{insert: v == d.diffnew}" ng-bind="v" ng-click="setDiff(d, v)" class="version"></span></p><div ng-repeat="diffs in d.diffcontent" class="diff"><div ng-class="{two:d.diffbase, one:!d.diffbase}" ng-repeat="diffline in diffs.difflines" ng-hide="diffline.left == \'\' &amp;&amp; diffline.right == \'\'" class="column stackable ui grid"><div ng-hide="!d.diffbase" class="column left {{diffline.state}}"><div class="ui segment article-text"><a id="original-{{diffs.leftItemAnchor}}" ng-href="#original-{{diffs.leftItemAnchor}}" ng-show="$index == 0" style="margin-top: -90px; padding-top: 90px"><div class="ui ribbon label">{{diffs.leftItem}}</div></a><div ng-class="diffstate(\'left\', \'{{diffline.state}}\')" class="ui right corner label">{{difftxt(\'left\', diffline.state)}}</div><div href="" target="blank" ng-bind-html="diffline.left" class="diff text"></div></div></div><div class="column right right {{diffline.state}}"><div ng-class="{\'mobile-hide\': !diffline.right}" class="ui segment article-text"><a href="" target="blank" ng-show="$index == 0" class="ui ribbon label">{{diffs.rightItem}}</a><div ng-class="diffstate(\'right\', \'{{diffline.state}}\')" class="ui right corner label">{{difftxt(\'right\', diffline.state)}}</div><div href="" target="blank" ng-bind-html="diffline.right" class="diff text"></div></div></div></div><div ng-bind-html="diffs.comment" ng-show="diffs.comment" class="ui segment green"></div><div class="ui horizontal divider"></div></div></div><div ng-show="showSidebar" class="content navigation mobile-hide"><div class="ui very thin sidebar"><div class="ui vertical menu"><div ng-repeat="(i, d) in diff track by $index" class="item-section"><a href="#{{d.name}}" class="item">{{d.name}}</a><div ng-repeat="diffs in d.diffcontent" class="law-unit-wrap"><div ng-show="diffs.leftItemAnchor" class="law-unit"><a ng-href="#original-{{diffs.leftItemAnchor}}" class="item">{{diffs.leftItem}}</a></div></div></div></div></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/calendar.html', [
'<div ngx-resize="ngx-resize" class="calendar"><ul class="nav nav-tabs"><li ng-class="{active: type == \'sitting\'}"><a ng-click="change(\'sitting\')" href="">一般議程</a></li><li ng-class="{active: type == \'hearing\'}"><a ng-click="change(\'hearing\')" href="">公聽會</a></li></ul><div class="time">立法院行程：<select ng-model="weeks" ng-options="o.label for o in weeksOpts" ng-change="update()"></select></div><div class="sitting"><h3 ng-hide="groupNum &gt; 0">本日無行程</h3><div class="group"><!-- YS is not in committee mapping object, this is the customized block for it--><div ng-show="group.YS" class="title"><div class="time">院會</div><table class="ui table segment"><thread><tr><th class="two wide">日期</th><th class="two wide">時間</th><th class="three wide">名稱</th><th class="nine wide">議程</th></tr></thread><tbody><tr ng-class="{negative:entry.onair}" ng-repeat="entry in group.YS"><td>{{entry.formatDate}}</td><td>{{entry.time_start}} 至 {{entry.time_end}}</td><td><a ng-href="/sittings/{{entry.sitting_id}}">{{entry.name}}</a></td><td>{{entry.summary}}</td></tr></tbody></table></div></div><div ng-repeat="(k, v) in group" class="group"><div ng-show="committees[k]" class="title"><div class="time"><img ng-src="http://avatars.io/50a65bb26e293122b0000073/committee-{{k}}?size=small" class="avatar small"/><span>{{committees[k]}}</span></div><table class="ui table segment"><thread><tr><th class="two wide">日期</th><th class="two wide">時間</th><th class="three wide">名稱</th><th class="one wide">主席</th><th class="eight wide">議程</th></tr></thread><tbody><tr ng-class="{negative:entry.onair}" ng-repeat="entry in group[k]"><td>{{entry.formatDate}}</td><td>{{entry.time_start}} 至 {{entry.time_end}}</td><td><a ng-href="/sittings/{{entry.sitting_id}}">{{entry.name}}</a></td><td>{{entry.chair}}</td><td>{{entry.summary}}</td></tr></tbody></table></div></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/debates.html', [
'<div ng-controller="LYDebates" ngx-resize="ngx-resize" class="debates"><div ng-grid="gridOptions" class="grid"></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/motions.html', [
'<div ng-class="{list: sitting}" class="motions"><h1><a href="/motions/{{session}}">第八屆第二會期</a></h1><div ng-hide="sitting" class="row-fluid"><div class="span10 chart"></div><div class="span2 legends"></div></div><button id="btnTop" ng-controller="topBtnCtrl" ng-show="showBtn" ng-click="jumpToTop()" class="btn">Jump to Top</button><div ng-show="sitting" class="list"><h2>第 {{sitting}} 次院會</h2><div class="row-fluid"><div class="span2 sidebar"><ul class="nav nav-list"><li ng-repeat="s in allStatus" ng-click="setStatus(s.key)" ng-class="{active: s.key == status}"><a href="#">{{s.value}}</a></li></ul><input ng-model="filter" placeholder="Search" class="filter search-query"/></div><div class="span10 content"><ul class="nav nav-tabs"><li ng-repeat="s in allTypes" ng-click="setType(s.key)" ng-class="{active: s.key == type}"><a href="#">{{s.value}}</a></li></ul><ul ng-class="{{type}}" class="motions"><li ng-repeat="e in entries | filter:{status: status} | filter:filter" class="row"><div class="avatars"><span ng-repeat="avatar in e.avatars"><img ng-src="http://avatars.io/50a65bb26e293122b0000073/{{avatar.avatar}}?size=small" ng-alt="{{avatar.name}}" ng-class="avatar.party" class="avatar"/></span></div><div class="motion"><span class="item">{{ e.item }}</span><span class="proposer">{{ e.proposer }}</span><a ng-href="/bills/{{ e.id }}"><span class="summary">{{ e.summary }}</span></a></div><div class="resolution">{{ e.resolution }}</div></li></ul></div></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/nav.html', [
'<ul class="nav"><li ng-class="{active:activeTab==\'calendar\'}"><a ng-href="/calendar">預報</a></li><li ng-class="{active:activeTab==\'sittings\'}"><a ng-href="/sittings">會議</a></li><li ng-class="{active:activeTab==\'debates\'}"><a ng-href="/debates">質詢</a></li></ul><ul class="nav pull-right"><li><form ng-submit="submitSearch()" ng-controller="SearchFormCtrl" class="ui form search"><div class="ui icon input"><input id="global-search" type="text" placeholder="搜尋" ng-model="searchKeyword" auto-complete="auto-complete"/><i class="search icon"></i></div><div class="results"></div></form></li><li ng-class="{active:activeTab==\'about\'}"><a ng-href="/about">關於</a></li><li class="fb-like"><a><div data-send="false" data-href="https://facebook.com/g0v.tw" data-width="120" data-layout="button_count" data-show-faces="false" data-font="verdana" class="fb-like"></div></a></li></ul>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/sitting.html', [
'<div ng-controller="LYSitting" class="row-fluid"><div class="span2"><div class="well sidebar-nav"><ul class="nav nav-list"><ul class="nav nav-link"><li><a href="#announcement"><i class="icon-bookmark"></i>報告事項</a></li><li><a href="#interpellation"><i class="icon-bookmark"></i>質詢事項</a></li></ul><div class="ly-scroll"><li ng-repeat="item in interp"><a href="#interpellation-{{item[0][0]}}">{{item[0][0]}}</a></li></div></ul></div></div><div class="span10"><h1>立法院第 {{meta.ad}} 屆第 {{meta.session}} 會期 第 {{meta.sitting}} 次會議記錄</h1><div class="hero-unit"><div ng-repeat="entry in meta.map" class="row"><div class="span3 td-title">{{entry.key}}</div><div class="span9">{{entry.value}}</div></div></div><div class="annoucement"><a data-toggle="collapse" data-target="#annoucement" class="btn pull-right">+</a><h1>報告事項</h1><hr/><div id="annoucement" class="collapse"><section ng-repeat="ann in annoucement">{{ann.subject}}<div ng-repeat="conv in ann.conversation" class="well"><span class="speaker label">{{conv.speaker}}</span><div class="content">{{conv.words}}</div></div></section></div></div><div class="interpellation"><h1>質詢事項<hr/><a data-toggle="collapse" data-target="#interp-answers" class="btn pull-right">+</a><h2>詢答</h2><hr/><section id="interp-answers" class="collapse"><div ng-repeat="answer in interpellation.answers" class="well">{{answer.receiver}} {{answer.words}}</div></section><a data-toggle="collapse" data-target="#interp-questions" class="btn pull-right">+</a><h2>質詢</h2><hr/><section id="interp-questions" class="collapse"><div ng-repeat="question in interpellation.questions" class="well">{{question.asker}} {{question.words}}</div></section><h2>個人質詢</h2><section id="interp-interp"><div ng-class="{well:interp.questioner, collapse:interp.questioner}" ng-repeat="interp in interpellation.interpellations" id="interpellation-{{interp.questioner}}"><a ng-show="interp.questioner" data-toggle="collapse" data-target="#interpellation-{{interp.questioner}}" class="btn pull-right">+</a><h4>{{interp.questioner}}</h4><div ng-repeat="conv in interp.conversation" class="well"><span class="speaker label">{{conv.speaker}}</span><div class="content">{{conv.words}}</div></div></div></section></h1></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/search.html', [
'<div class="search"><div class="ui floating message"><span class="keyword">搜尋 {{keyword}}</span><span ng-show="busy" class="spinner small"></span><span ng-cloak="ng-cloak" ng-show="results.length &lt;= 0">，無搜尋結果</span></div><div ng-show="results.length &gt; 0" class="results"><div ng-repeat="r in results" class="content ui segment"><div class="ui top left attached label red">{{r.proposed_by}}</div><div class="body"><span class="name"><a ng-href="/bills/{{r.bill_ref || r.bill_id}}">{{r.summary}}</a></span><p class="description">{{r.abstract}}</p></div><div class="ui bottom attached label"><span ng-repeat="s in r.sponsors" class="sponsor">{{s}}</span></div></div></div><h4 detect-visible="moreResults()">目前找到：{{results.length}} 筆</h4><span ng-show="busy" class="spinner small"></span></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/sittings.html', [
'<div ng-cloak="ng-cloak" class="sittings"><script src="https://www.youtube.com/iframe_api"></script><script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.3.3/d3.min.js"></script><h1><span>{{ name }}</span></h1><span ng-show="videos.length &gt; 0 &amp;&amp; !loaded"><a ng-href="/sittings/{{id}}/video" class="pull-right btn btn-info">觀看影片</a></span><div ng-hide="video" class="sitting-options"><select ng-model="chosenSitting" ng-options="sitting.name for sitting in currentList"></select><span ng-show="loadingSitting" class="spinner small"></span></div><div ng-hide="video"><span class="btn-group"><button data-toggle="dropdown" class="btn dropdown-toggle">選擇其他<span class="caret"></span></button><ul class="dropdown-menu"><li><a ng-click="setContext(\'YS\')">院會</a></li><li ng-repeat="(type, name) in committees"><a ng-click="setContext(type)">{{name}}</a></li></ul></span><span ng-show="loadingSitting" class="spinner small"></span></div><div class="row-fluid"><div class="span10 content"><div ng-show="committee" class="role committee"><ul><li ng-repeat="c in committee"><span><img ng-src="http://avatars.io/50a65bb26e293122b0000073/committee-{{c.abbr}}?size=medium" ng-alt="{{c.name}}" ng-class="{{c.abbr}}" class="avatar medium"/><span class="name">{{c.name}}委員會</span></span></li></ul></div><!-- XXX use mly filter to set styles--><div class="hero-unit"><div ng-show="dates[0].chair" class="row"><div class="span3 td-title">主席</div><div class="span9">{{ dates[0].chair }}</div></div><div ng-show="dates" ng-repeat="entry in dates" class="row"><div class="span3 td-title"><span ng-show="$index==0">時間</span></div><div class="span9">{{entry.date}} : {{entry.time_start}} -  {{entry.time_end}}</div></div><div ng-show="summary" class="row"><div class="span3 td-title">概要</div><div class="span9">{{ summary }}</div></div><div ng-show="proceeding_url" class="row"><div class="span3 td-title">議事錄</div><div class="span9"><a ng-href="{{ proceeding_url }}" target="_blank">PDF</a></div></div></div><div class="row-fluid"><div class="span10 content"></div></div></div></div><div ng-show="video" class="row-fluid"><div id="player"></div><div id="share"><span class="buttons"><a title="分享至Facebook" ng-href="https://www.facebook.com/sharer.php?u={{sharelinkEscaped}}&amp;via=lyg0vtw" target="_blank" class="icon-facebook-sign sharebutton"></a><a title="分享至Twitter" ng-href="https://twitter.com/intent/tweet?url={{sharelinkEscaped}}" target="_blank" class="icon-twitter-sign sharebutton"></a><a title="分享至Google Plus" href="https://plus.google.com/share?url={{sharelinkEscaped}}" target="_blank" class="icon-google-plus-sign sharebutton"></a></span><input id="sharelink" type="text" ng-model="sharelink" size="30"/><strong>開始時間</strong><input id="changeoffset" type="checkbox" ng-model="shareOffset"/><div ng-show="shareOffset" name="offset" class="timeoffset"><span class="offset"><strong>開始日期</strong><input id="dateoffset" type="text" ng-model="dateOffset" size="10"/></span><span class="offset"><strong>開始時間</strong><input id="timeoffset" type="text" ng-model="timeOffset" size="10"/></span></div></div><div ng-repeat="waveform in waveforms track by $index" class="wav-group"><ng-waveform ng-model="waveform"></ng-waveform></div><div id="avatar-tooltip" class="ui label pointing below"><img/><div class="name"></div><a class="btn"><i class="icon play"></i></a></div></div><div ng-hide="video" class="row-fluid"><div class="entries motions"><input ng-model="filter" placeholder="輸入關鍵字過濾列表" class="filter search-query pull-right"/><ul class="nav nav-tabs"><li ng-repeat="s in allTypes" ng-click="setType(s.key)" ng-class="{active: s.key == type}"><a href="">{{s.value}}</a></li></ul><div class="list"><ul ng-class="{{type}}" class="motions"><li ng-repeat="e in entries | filter:filter" class="row"><div class="avatars"><span ng-repeat="avatar in e.avatars"><i ng-class="avatar.iconClass" ng-if="avatar.iconClass" ng-alt="{{avatar.name}}" class="g0v-icon large"></i><img ng-src="http://avatars.io/50a65bb26e293122b0000073/{{avatar.avatar}}?size=small" ng-alt="{{avatar.name}}" ng-class="avatar.party" ng-if="!avatar.iconClass" class="avatar"/></span></div><div class="motion"><span class="item-heading">{{ e.item }}</span><span class="proposer">{{ e.proposed_by }}</span><a ng-href="/bills/{{ e.bill_ref || e.bill_id }}"><span class="summary">{{ e.summary }}</span></a><span ng-show="e.sitting_introduced == sitting_id" class="label label-important">new</span></div><div class="resolution">{{ e.resolution }}</div></li></ul></div></div><!-- XXX: show onair and upcoming ivod link--><!-- XXX: search archived ivod clips for past sittings--><!-- XXX: show agenda from misq, annotated with info from npl--><!-- XXX: show debates, wrans if YS--></div></div>',''].join("\n"));
}]);