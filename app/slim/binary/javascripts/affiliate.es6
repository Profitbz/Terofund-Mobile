TeroFundWeb.dashboard_affiliate = {
  unilevel: {
    init: function() {
      $(document).on('click', '.has-children .affiliate-table__icon', function () {
        $(this).find('svg').toggleClass('rotate')
        $(this).closest('.has-children').next('.children').slideToggle("slow")
      })

      $(document).on('click', 'input[type="submit"]', function() {
        Utils.showLoading()
      })

      $(document).on('click', '.get-more-child', function() {
        let global_object = $('.unilevel-content-wrap')
        let user_id = $(this).attr('data-user-id')
        let parent_object = $(this).closest('.unilevel-wrap')
        let parent_html = parent_object.wrap('<p/>').parent().html()
        global_object.html(parent_html)

        let active = $(this).attr('data-active')
        let id = $(this).attr('data-user-id')
        let offset = $(this).attr('data-offset')

        if (active == 'no') {
          $(document).find('.get-more-child[data-user-id="' + user_id + '"]').attr('data-active', 'yes')
          Utils.showLoading()

          $.ajax({
            type: 'POST',
            url: '/dashboard/affiliate/unilevel_child_mlm',
            dataType: 'script',
            data: { 
              id: id,
              offset: offset
            }
          })
        } else {
          $(document).find('.get-more-child[data-user-id="' + user_id + '"]').attr('data-active', 'no')
          $(document).find('.get-more-child[data-user-id="' + user_id + '"]').closest('.unilevel-wrap').children('.js-network-container.children').html('')
          $(document).find('.get-more-child[data-user-id="' + user_id + '"]').closest('.unilevel-wrap').children('.load-more-wrap').html('')
        }
      })

      $(document).on('click', '.load-more-node', function() {
        let id = $(this).attr('data-user-id')
        let offset = $(this).attr('data-offset')
        Utils.showLoading()

        $.ajax({
          type: 'POST',
          url: '/dashboard/affiliate/unilevel_child_mlm',
          dataType: 'script',
          data: { 
            id: id,
            offset: offset
          }
        })
      })
    }
  },
  search_unilevel: {
    init: function() {
      $(document).on('click', '.has-children .affiliate-table__icon', function () {
        $(this).find('svg').toggleClass('rotate')
        $(this).closest('.has-children').next('.children').slideToggle("slow")
      })
    }
  },
  binary_mlm: {
    init: function () {
      $(document).on('click', 'input[type="submit"]', function() {
        Utils.showLoading()
      })

      Utils.setupTooltip('.node-item-root .item .info')

      let id, width_network_wrap, width_network_content

      width_network_wrap = $('.network-wrap').outerWidth()
      width_network_content = $('.network').outerWidth()

      if (width_network_content > width_network_wrap) {
        $('.network-wrap').scrollLeft((width_network_content - width_network_wrap)/2) 
      }

      $(document).on('click', '.node-item-root .load-more', function(e) {
        Utils.showLoading()
        let arr_level_4 = []
        id = $(this).attr('data-user-id')

        $(this).closest('.render-tree').find('.children .children .children .node-item-root').each(function() {
          arr_level_4.push($(this).attr('id'))
        })

        let index = arr_level_4.indexOf(id)
        arr_level_4.splice(index, 1)

        $.each(arr_level_4, function(index, id) {
          $('.node-item-root#' + id).removeClass('visited')
          let node_append = $('.node-append.' + id)
          node_append.nextUntil().remove()
          node_append.remove()
        })

        $.ajax({
          type: 'POST',
          url: '/dashboard/affiliate/get_child_node',
          dataType: 'script',
          data: { id: id }
        })
      })

      $(document).on('click', '.remove-child-node', function(e) {
        let arr_level_4 = []
        id = $(this).attr('data-user-id')

        let node_append = $('.node-append.' + id)
        node_append.nextUntil().remove()
        node_append.remove()

        $('.node-item-root#' + id).removeClass('visited')
      })
    }
  }
}