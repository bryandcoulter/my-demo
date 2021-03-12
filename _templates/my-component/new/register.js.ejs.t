---
to: <%= path %>/<%= name %>/<%= name %>.js
---
import <%= h.classifyDashed(name) %> from './<%= h.classifyDashed(name) %>.js';
customElements.define('<%= name %>', <%= h.classifyDashed(name) %>);
export default <%= h.classifyDashed(name) %>;
