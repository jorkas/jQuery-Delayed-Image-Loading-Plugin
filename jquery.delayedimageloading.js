/**
 * @author Joakim Westerlund
 * @version 0.1 (2011-06-01)
 */
(function( $ ){
    var methods = {
        loadGravatar: function(settings, selector){
            this.each(function(){
                var src = $(this).data("dlGravatarUrl");
                if(src){
                    $(this).html('<img src="'+ src +'">');
                }
            });
        }
    };
    $.fn.delayedImageLoading = function(){
        methods.loadGravatar.call(this);
    };
})( jQuery );
