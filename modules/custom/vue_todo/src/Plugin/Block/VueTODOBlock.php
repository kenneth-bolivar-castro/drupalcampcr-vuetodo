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
    $build = [];
    $build['vue_todo_block']['#markup'] = 'Implement VueTODOBlock.';

    return $build;
  }

}
