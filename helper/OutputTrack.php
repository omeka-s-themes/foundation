<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class OutputTrack extends AbstractHelper
{
    public function __invoke($file = null, $videoName = '') 
    {
        $html = '';
        $originalName = $file->source();
        $trackSrc = $file->originalUrl();

        if ($originalName == "$videoName.vtt") {
            $kind = $file->value('dcterms:type');
            $language = $file->value('dcterms:language');
            $label = $file->displayTitle();
            
            if (!$kind) {
                $kind = 'subtitles';
            }
            
            if ($language == '') {
                $language = $this->getView()->siteSetting('locale');
            }

            $html .= '{"src": "{' . $trackSrc . '", "kind":"' . $kind . '", "srclang": "' . $language . '", "label": "' . $label . '", "default": "true"},';
        }
        
        return $html;
    }
}