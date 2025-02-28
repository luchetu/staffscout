<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_tag', 'post_id', 'tag_id');
    }
}
