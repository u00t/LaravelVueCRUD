<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Http\Services\ItemService;
use App\Item;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Storage;

class ItemsController extends Controller
{
    /**
     * @var ItemService
     */
    private $itemService;

    /**
     * ItemsController constructor.
     * @param ItemService $itemService
     */
    public function __construct(ItemService $itemService)
    {
        $this->itemService = $itemService;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
    	$perPage = $request->per_page;
    	$query = Item::orderBy('created_at', 'desc');

    	return $query->paginate($perPage);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateItemRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateItemRequest $request) {
    	$item = new Item();

        if ($request->hasFile('file')) {
    	   	$this->itemService->uploadFile($request, $item);
    	}

    	$this->itemService->saveItem($request, $item);
    	return response(null, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
    	return Item::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateItemRequest $request
     * @param  int $id
     * @return Response
     */
    public function update(UpdateItemRequest $request, $id)
    {
        $item = Item::findOrFail($id);
        $request->file = $item->file;

        $this->itemService->saveItem($request, $item);

        return response(null, Response::HTTP_CREATED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Item::findOrFail($id);

        Item::destroy($id);
    }
}
