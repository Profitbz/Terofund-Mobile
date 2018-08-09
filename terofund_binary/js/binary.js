jQuery(document).ready(function($) {
  // Render tree 
  $.getJSON("controllers/get_children_information.json", function(response) {
    var children_information = response.data

    $.getJSON("controllers/export_binary_tree.json", function(response) {
      var data, item, children
      var html = ''

      data     = response.data
      item     = data.self
      children = data.children

      html += '<div class="node-item-root txt-center" id="' + item.id + '">'
      html += '  <div class="content-wrap">'
      html += '    <div class="count-left">'
      html += '      <label>Left</label>'
      html += '      <div>' + children_information.left_childrens + ' member</div>'
      html += '      <div>' + children_information.left_lending_usdh_amount + ' USDH</div>'
      html += '      <div>' + children_information.left_pv + ' PV</div>'
      html += '    </div>'

      html += '    <div class="item">'
      html += '      <div class="info" data-tooltip-content="#tooltip_content_' + item.id + '">'
      html += '        <div class="avatar">'
      html += '          <img src="https://ui-avatars.com/api/?background=455074&amp;color=fff&amp;size=80&amp;font-size=0.33&amp;name=' + item.name + '">'
      html += '        </div>'

      html += '        <div class="name">' + item.username + '</div>'
      html += '      </div>'
      html +=        render_tooltip(item)
      html += '    </div>'

      html += '    <div class="count-right">'
      html += '      <label>Right</label>'
      html += '      <div>' + children_information.right_childrens + ' member</div>'
      html += '      <div>' + children_information.right_lending_usdh_amount + ' USDH</div>'
      html += '      <div>' + children_information.right_pv + ' PV</div>'
      html += '    </div>'
      html += '  </div>'
      html += '</div>'


      if (children.length > 0) {
        html += render_children(children)
      }

      $('.render-tree').append(html).promise().done(function() {
        setupTooltip('.item .info')
      })
    })
  })

  function render_tooltip(item) {
    var html = ''
    html += '<div class="tooltip_templates">'
    html += '  <div id="tooltip_content_' + item.id + '">'
    html += '    <div class="node-information-container">'
    html += '      <div class="node-avatar">'
    html += '        <img src="https://ui-avatars.com/api/?background=304ffe&color=fff&size=60&font-size=0.33&name=' + item.name + '">'
    html += '      </div>'
    html += '      <div class="node-name">' + item.name + '</div>'
    html += '      <ul>'
    html += '        <li>'
    html += '          <span>Username</span>'
    html += '          <span class="value">' + item.username + '</span>'
    html += '        </li>'
    html += '        <li>'
    html += '          <span>Sponsor</span>'
    html += '          <span class="value">' + item.sponsor + '</span>'
    html += '        </li>'
    html += '      </ul>'
    html += '      <div class="created-at">'
    html += '        <em>Joined date</em>'
    html += '        <p>' + moment(item.created_at).format('DD MMM YYYY - HH:mm:ss') + '</p>'
    html += '      </div>'
    html += '    </div>'
    html += '  </div>'
    html += '</div>'
    return html
  }

  function render_children(children) {
    var html = ''
    html += '<div class="children">'
    $.each(children, function(index, child){
      html += render_item(child, index, html)
    })
    html += '</div>'

    return html
  }

  function render_item(child, index, html) {
    var html, item, children, position, islast

    html     = ''
    item     = child.self
    children = child.children
    islast   = ''

    if (index == 0) {
      position = 'node-item-left'
    } else {
      position = 'node-item-right'
    }

    if (children.length == 0) {
      islast = 'last'
    }

    if (item.id) {
      html += '<div class="node-child ' + position + ' txt-center">'
      html += '  <div class="node-item-root txt-center ' + islast + '" id="' + item.id + '">'
      html += '    <div class="item">'
      html += '      <div class="info"  data-tooltip-content="#tooltip_content_' + item.id + '">'
      html += '        <div class="avatar">'
      html += '          <img src="https://ui-avatars.com/api/?background=455074&amp;color=fff&amp;size=80&amp;font-size=0.33&amp;name=' + item.name + '">'
      html += '        </div>'
      html += '        <div class="name">' + item.username + '</div>'
      html += '      </div>'
      if (item.total_child > 0) {
        html += '      <a data-user-id="' + item.id + '" class="load-more" href="javascript:">' +
            '\n' +
            '<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
            '    <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n' +
            '    <desc>Created with Sketch.</desc>\n' +
            '    <defs></defs>\n' +
            '    <g id="Fund" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g id="16.-Affiliate-Binary-white" transform="translate(-226.000000, -705.000000)">\n' +
            '            <g id="Binary-system" transform="translate(44.000000, 478.000000)">\n' +
            '                <g id="4" transform="translate(155.000000, 135.000000)">\n' +
            '                    <g id="Group-5" transform="translate(0.000000, 4.454343)">\n' +
            '                        <g id="Group-4" transform="translate(0.000000, 24.545657)">\n' +
            '                            <g id="+" transform="translate(27.000000, 63.000000)">\n' +
            '                                <circle id="Oval-9" fill="#304FFE" cx="12" cy="12" r="12"></circle>\n' +
            '                                <polygon id="`" fill="#FFFFFF" points="10.9311741 16 10.9311741 12.8784314 8 12.8784314 8 11.1215686 10.9311741 11.1215686 10.9311741 8 13.0688259 8 13.0688259 11.1215686 16 11.1215686 16 12.8784314 13.0688259 12.8784314 13.0688259 16"></polygon>\n' +
            '                            </g>\n' +
            '                        </g>\n' +
            '                    </g>\n' +
            '                </g>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>' +
            '</a>'
      }
      html +=        render_tooltip(item)
      html += '    </div>'
      html += '  </div>'

      if (children.length > 0) {
        html += render_children(children)
      }

      html += '</div>'
    }

    return html
  }

  $(document).on('click', '.node-item-root .load-more', function(e) {
    var arr_level_4, id

    arr_level_4 = []
    id          = $(this).attr('data-user-id')

    $(this).closest('.render-tree').find('.children .children .children .node-item-root').each(function() {
      arr_level_4.push($(this).attr('id'))
    })

    var index = arr_level_4.indexOf(id)
    arr_level_4.splice(index, 1)
    var new_arr_level_4 = arr_level_4.filter(function(x){
      return (x !== (undefined || null || ''))
    })

    $.each(new_arr_level_4, function(index, id) {
      $('.node-item-root#' + id).removeClass('visited')
      var node_append = $('.node-append.' + id)
      node_append.nextUntil().remove()
      node_append.remove()
    })

    $.getJSON("controllers/get_child_node.json", function(response) {
      var html = ''
      var data = response.data
      html += render_child_node(data)
      html += '<div class="line"></div>'
      $('.network').append('<div class="render-tree node-append ' + id + '">' + html + '</div>').promise().done(function() {
        setupTooltip('.item .info')
      })

      var node_item_append = $('.network .node-append.' + id + ' > .node-item-root')
      var node_item_root   = $('.network .node-item-root#' + id)

      var node_item_append_offset_left = node_item_append.offset().left + (node_item_append.outerWidth()/2)
      var node_item_offset_left        = node_item_root.offset().left + (node_item_root.outerWidth()/2)

      $('.node-item-root#' + id).addClass('visited')

      if (node_item_append_offset_left < node_item_offset_left) {
        var width = node_item_offset_left - node_item_append_offset_left
        var left = node_item_append_offset_left

        $('.network .node-append.' + id).find('.line').css({ width: width }).offset({ left: left })
      }
      
      if (node_item_append_offset_left > node_item_offset_left) {
        var width = node_item_append_offset_left - node_item_offset_left
        var left = node_item_offset_left

        $('.network .node-append.' + id).find('.line').css({ width: width }).offset({ left: left })
      }
      
      if (node_item_append_offset_left == node_item_offset_left) {
        var width = 2
        var left = node_item_offset_left

        $('.network .node-append.' + id).find('.line').css({ width: width }).offset({ left: left })
      }
    })
  })

  $(document).on('click', '.remove-child-node', function(e) {
    var arr_level_4 = []
    var id = $(this).attr('data-user-id')

    var node_append = $('.node-append.' + id)
    node_append.nextUntil().remove()
    node_append.remove()

    $('.node-item-root#' + id).removeClass('visited')
  })

  function render_child_node(data) {
    var data, item, children
    var html = ''

    item      = data.self
    children       = data.children

    html += '<div class="node-item-root txt-center" id="' + item.id + '">'
    html += '  <div class="content-wrap">'
    html += '    <a data-user-id="' + item.id + '" class="remove-child-node" href="javascript:"></a>'

    html += '    <div class="item">'
    html += '      <div class="info"  data-tooltip-content="#tooltip_content_' + item.id + '">'
    html += '        <div class="avatar">'
    html += '          <img src="https://ui-avatars.com/api/?background=455074&amp;color=fff&amp;size=80&amp;font-size=0.33&amp;name=' + item.name + '">'
    html += '        </div>'

    html += '        <div class="name">' + item.username + '</div>'
    html += '      </div>'
    html += '    </div>'
    html +=      render_tooltip(item)
    html += '  </div>'
    html += '</div>'


    if (children.length > 0) {
      html += render_children(children)
    }

    return html
  }

  function setupTooltip(element) {
    var mouse_method

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      mouse_method = 'click'
    } else {
      mouse_method = 'hover'
    }

    $(element).tooltipster({
      contentCloning: true,
      delayTouch: 0,
      trigger: mouse_method
    })
  }
})