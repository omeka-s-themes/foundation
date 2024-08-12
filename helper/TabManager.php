<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class TabManager extends AbstractHelper
{
    public function getResourcePageBlocks($resource) {
        $regions = ['full_width_main', 'left', 'main', 'right'];
        $view = $this->getView();
        $tabLayout = $view->themeSetting('tab_navigation_layout');
        $tabContent = $view->themeSetting('tab_navigation_content');
        $regionContent = [];
        foreach ($regions as $region) {
            $regionResourcePageBlocks = $view->resourcePageBlocks($resource, $region);
            if ($regionResourcePageBlocks->hasBlocks()) {
                $regionContent[$region] = $regionResourcePageBlocks->getBlocksArray();
            }
        }
        return $regionContent;
    }

    public function getTabNavigationRegion($resource) {
        $resourcePageBlocks = $this->getResourcePageBlocks($resource);
        $tabNavigationRegion = false;
        foreach ($resourcePageBlocks as $region => $blockArray) {
            if (array_key_exists('tab_navigation', $blockArray)) {
                $tabNavigationRegion = $region;
            }
        }
        return $tabNavigationRegion;
    }

    public function renderPanels($resource, $contentRegion = 'main', $layout = 'vertical')
    {
        $view = $this->getView();
        $tabContentBlocksArray = $view->resourcePageBlocks($resource, $contentRegion)->getBlocksArray();
        return $view->partial('common/tab-panels.phtml', [
            'resource' => $resource,
            'resourcePageBlockArray' => $tabContentBlocksArray,
            'tabLayout' => $layout
        ]);
    }

    public function renderTabsOnly($resource, $contentRegion = 'main', $layout = 'vertical') 
    {
        $view = $this->getView();
        $tabContentBlocksArray = $view->resourcePageBlocks($resource, $contentRegion)->getBlocksArray();
        return $view->partial('common/tab-navigation-markup.phtml', [
            'resource' => $resource,
            'resourcePageBlocksArray' => $tabContentBlocksArray
        ]);
    }

    public function renderTabsRegion($resource, $currentRegion, $contentRegion = 'main', $layout = 'vertical')
    {
        $view = $this->getView();
        $regionBlockContentArray = $view->resourcePageBlocks($resource, $currentRegion)->getBlocksArray();
        $regionBlockContentArray['tab_navigation'] = $this->renderTabsOnly($resource, $contentRegion, $layout);
        return implode('', $regionBlockContentArray);
    }
}
