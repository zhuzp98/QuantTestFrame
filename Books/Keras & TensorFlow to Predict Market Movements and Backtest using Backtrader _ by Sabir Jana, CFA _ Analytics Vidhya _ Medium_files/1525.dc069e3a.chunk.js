(self.webpackChunklite=self.webpackChunklite||[]).push([[1525],{19308:(e,n,i)=>{"use strict";i.d(n,{b:()=>l,I:()=>d});var t=i(87329),a=i(68216),o=i(98007),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_collection"}}]}}].concat((0,t.Z)(a.nf.definitions),(0,t.Z)(o.Os.definitions))}},82377:(e,n,i)=>{"use strict";i.d(n,{i:()=>a});var t=i(87329),a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostResultError_postResult"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostResult"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"}}]}}]}}].concat((0,t.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"UnavailableForLegalReasonsScreen_unavailableForLegalReasons"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UnavailableForLegalReasons"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]),(0,t.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"WithheldInCountryScreen_withheldInCountry"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"WithheldInCountry"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lumenId"}}]}}]))}},5911:(e,n,i)=>{"use strict";i.d(n,{I:()=>F,r:()=>g});var t=i(67294),a=i(77324),o=i(92030),l=i(2059),d=i(57563);function r(e){var n=e.errorData;return t.createElement(a.q,{code:451,title:"451 Not available — Medium",lumenId:n.lumenId},"This story is subject to a DMCA copyright or other legal or government claim.")}function c(e){var n=e.errorData;return t.createElement(a.q,{code:451,title:"451 Not available in your country — Medium",lumenId:n.lumenId},"This page is not available in your country.")}var m=i(29747),u=i(93310),s=i(5991),k=i(6610),v=i(10379),p=i(46070),N=i(77608);var S=function(e){(0,v.Z)(a,e);var n,i,t=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,N.Z)(n);if(i){var a=(0,N.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,p.Z)(this,e)});function a(){return(0,k.Z)(this,a),t.call(this,"Expected postResult to exist.\n       For more detail, try checking for GraphQL server errors with the same x-request-id.")}return(0,s.Z)(a)}((0,i(72317).Z)(Error)),y=i(59764),f=i(50458),g=function(e){return!(0,y.f)(e)},F=function(e){var n=e.postResult;if(!n)return t.createElement(o.C,{error:new S});switch(n.__typename){case"Unauthorized":return t.createElement(m.N,{opt_isDraft:!0});case"NotFound":return t.createElement(l.$,null);case"AccountDeleted":return t.createElement(a.q,{code:410,title:"410 Deleted by author — Medium"},"User deactivated or deleted their account.");case"AccountSuspended":return t.createElement(d.y,{suspension:"account"});case"PostSuspended":return t.createElement(d.y,{suspension:"post"});case"Blocked":return t.createElement(a.q,{code:403,title:"403 Blocked — Medium"},"This user has blocked you from following them or viewing their stories.");case"Blocking":return t.createElement(a.q,{code:403,title:"403 Blocking — Medium"},"This story is not available because you have blocked the author."," ",t.createElement(u.r,{href:f.kx,inline:!0,linkStyle:"OBVIOUS",target:"_blank"},"Learn more"));case"RemovedByUser":return t.createElement(a.q,{code:410,title:"410 Deleted by author — Medium"},"The author deleted this Medium story.");case"UnavailableForLegalReasons":return t.createElement(r,{errorData:n});case"WithheldInCountry":return t.createElement(c,{errorData:n});default:return t.createElement(o.C,{error:new Error("Unsupported postResult: ".concat(n.__typename))})}}},39727:(e,n,i)=>{"use strict";i.d(n,{g:()=>l});var t=i(64718),a=i(87329),o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CollectionViewerEdge"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"collectionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"collectionId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Collection_viewerEdge"}}]}}]}}]}}]}}].concat((0,a.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"Collection_viewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CollectionViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"canEditOwnPosts"}},{kind:"Field",name:{kind:"Name",value:"canEditPosts"}},{kind:"Field",name:{kind:"Name",value:"isEditor"}},{kind:"Field",name:{kind:"Name",value:"isFollowing"}},{kind:"Field",name:{kind:"Name",value:"isMuting"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToLetters"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToMediumNewsletter"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToEmails"}},{kind:"Field",name:{kind:"Name",value:"isWriter"}}]}}]))},l=function(e){var n,i,a=(0,t.a)(o,{variables:{collectionId:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:""},ssr:!1,skip:!(null!=e&&e.id)}),l=a.loading,d=a.error,r=a.data;return l?{loading:l}:d?{error:d}:{viewerEdge:null==r||null===(i=r.collection)||void 0===i?void 0:i.viewerEdge}}},25267:(e,n,i)=>{"use strict";i.d(n,{I:()=>a});var t=i(6443),a=function(e){var n=e.children,i=e.nonBlocking,a=(0,t.H)(),o=a.error,l=a.loading,d=a.value;return i&&(o||l)?n(null):l?null:n(d)}},29747:(e,n,i)=>{"use strict";i.d(n,{N:()=>m});var t=i(67294),a=i(90833),o=i(18839),l=i(66411),d=i(43487),r=i(78870),c=i(50458),m=function(e){var n=e.opt_isDraft,i=e.opt_params,m=e.operation,u=e.opt_hash,s=e.opt_location,k=(0,d.v9)((function(e){return e.config.authDomain})),v=(0,d.v9)((function(e){return e.navigation.currentLocation})),p=(0,l.pK)(),N=(0,l.hp)(),S=(0,r.Rk)((0,c.Kk)(k),{operation:m||"login",redirect:(0,o.hQ)(s||v,p,N,null,null,i,u),isDraft:n?"1":"0"});return t.createElement(a.l,{to:S,temporary:!0})}},98007:(e,n,i)=>{"use strict";i.d(n,{Os:()=>o,qU:()=>l,Vm:()=>d,GB:()=>r});var t=i(87329),a=i(20121),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_collection"}}]}}].concat((0,t.Z)(a.Hr.definitions))},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_post"}}]}}].concat((0,t.Z)(a.qt.definitions))},d=([{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_topic"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Topic"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_topic"}}]}}].concat((0,t.Z)(a.Uh.definitions)),{kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_user"}}]}}].concat((0,t.Z)(a.Zd.definitions))}),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_newsletterV3"}}]}}].concat((0,t.Z)(a.gs.definitions))};[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SusiClickableAccountTokenQuery"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_query"}}]}}].concat((0,t.Z)(a.Zz.definitions))}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1525.dc069e3a.chunk.js.map