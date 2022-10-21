<?php

namespace App\Http\Controllers;

use App\Http\Resources\SkillResource;
use Illuminate\Http\Request;
use App\Models\Skill;
use Inertia\Inertia;
use App\Http\Resources\ProjectResource;
use App\Models\Project;

class WelcomeController extends Controller
{
    public function welcome(){
        $skills = SkillResource::collection(Skill::all());
        $projects = Projectresource::collection(Project::with('skill')->get());

        return Inertia::render('Welcome', compact('skills', 'projects'));
    }
}
