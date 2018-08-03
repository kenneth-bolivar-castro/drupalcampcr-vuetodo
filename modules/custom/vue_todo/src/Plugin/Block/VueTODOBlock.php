<?php

namespace Drupal\vue_todo\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'VueTODOBlock' block.
 *
 * @Block(
 *  id = "vue_todo_block",
 *  admin_label = @Translation("Vue TODO"),
 * )
 */
class VueTODOBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      'vue_todo_block' => [
        '#markup'   => '<div id="app"></div>',
        '#attached' => [
          'library' => [
            'vue_todo/vue-todo',
          ],
        ],
      ],
    ];
  }

}
