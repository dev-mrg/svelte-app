

Just came up with a super simple router here, using jQuery and Svelte - 




<div class= "yourclass">
<a href="#page3" id="p3b" class='selector' on:click={routes}>TAB3</a>/**this is the selector, this "a" tag 
                                            requires a unique "href" unique id, and a class name of "selector"
                                            also needs to make a on:click call to routes ie: "on:click{routes}" 

<div id="page3" class="page">  /**Use the page class on any component that will represent a page
                                and a unique id. **/
<p>Ima Blusish Page</p>
</div>
</div>