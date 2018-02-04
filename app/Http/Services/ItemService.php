<?php

namespace App\Http\Services;

use Storage;

class ItemService
{
    /**
     * @param $request
     * @param $item
     */
    public function saveItem($request, $item)
    {
        $item->text = $request->text;
        $item->date = $request->date;
        $item->time = $request->time;
        $item->select1 = $request->select1;
        $item->select2 = $request->select2;
        $item->save();
    }

}