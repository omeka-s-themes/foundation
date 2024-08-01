<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class TabNavigation extends AbstractHelper
{
    public function __invoke($resource, $contentRegion = 'main', $layout = 'vertical')
    {
        $view = $this->getView();
        $tabContentBlocksArray = $view->resourcePageBlocks($resource, $contentRegion)->getBlocksArray();
        return $view->partial('common/tab-navigation-markup.phtml', [
            'resource' => $resource,
            'resourcePageBlocksArray' => $tabContentBlocksArray
        ]);
    }
}
