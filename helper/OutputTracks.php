<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class OutputTracks extends AbstractHelper
{
    public function __invoke($textFile = null) 
    {
        $kind = $textFile->value('dcterms:type');
        $language = $textFile->value('dcterms:language');
        $label = $textFile->displayTitle();
        $escape = $this->plugin('escapeHtml');
    
        if (!$kind) {
            $kind = 'subtitles';
        }
    
        if (!$language) {
            $language = $this->settings->get('locale');
        }
    
        $trackSrc = $escape($textFile->originalUrl());
    
        if ($label) {
            $labelPart = ' label="' . $label . '"';
        } else {
            $labelPart = '';
        }
    
        $track = '<track kind="' . $kind . '" src="' . $trackSrc . '" srclang="' . $language . '"' . $labelPart . '>';
    
        return $track;
    }
}