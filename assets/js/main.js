"use strict";!function(i,n){i(function(){i(".ui.accordion").accordion(),i(".ui.dropdown").dropdown();var e=n.compile('\n      <div style="padding: 10px 0px 10px 5px;">\n        <div class="ui grid container">\n          <div class="two column row">\n            <div class="column">\n              <h3 class="ui header">\n                {{{ _highlightResult.title.value }}}\n                <div class="sub header">\n                  {{ collection }} | {{ type-org }}\n                </div>\n              </h3>\n            </div>\n            <div class="column right aligned">\n              <i class="marker icon"></i> {{ city }}, {{ country }}\n            </div>\n          </div>\n        </div>\n      </div>\n    '),o="ITI5JHZJM9",a="5828bf68d90dbb0251e6ce88aabe2e07",t="diybiosphere",d=algoliasearch(o,a),s=d.initIndex(t);i('[data-algolia-search="true"]').autocomplete({hint:!0,debug:!0},[{source:i.fn.autocomplete.sources.hits(s,{hitsPerPage:4}),displayKey:"title",templates:{suggestion:function(i){return e.render(i)},footer:'\n          <div class="ui vertical padded right aligned segment">\n            <a href="https://www.algolia.com">\n              <img src="/assets/img/poweredBy-Algolia.svg">\n            </a>\n          </div>\n        '}}]).on("autocomplete:selected",function(i,n){window.location=n.url})})}($,Hogan);