<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\PullRequest;
use App\Entity\BlogPost;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Workflow\Registry;



class WorkFlowController extends AbstractController {

     private $workflowRegistry;

    public function __construct(Registry $workflowRegistry)
    {
        $this->workflowRegistry = $workflowRegistry;
    }


    /**
     * @Route("/work/flow", name="work_flow")
     */
    public function index() {

       $blogPost = new BlogPost();
       
       $workflow = $this->workflowRegistry->get($blogPost);
       
     
//       dump($workflow->can($blogPost, 'publish'));die(); 
//       dump($workflow); 
       
       
       
       
       //$transitions = $this->workflowRegistry->getEnabledTransitions($post);
      // dump($transitions); die(); 
       
//       $this->stateMachine->apply($post, 'wait_for_review', [
//            'log_comment' => 'My logging comment for the wait for review transition.',
//        ]);
//
//       // 
//
// //$workflow = $this->container->get('workflow.blog_publishing');
// $workflow = $this->workflows->get($post, 'blog_publishing');
//
// dump($workflow);
// 



        /* $workflow->can($post, 'publish'); // False
          $workflow->can($post, 'to_review'); // True

          // Update the currentState on the post
          try {
          $workflow->apply($post, 'to_review');
          } catch (LogicException $exception) {

          dump($workflow); die();
          }
         */


//        $pullRequest= new PullRequest(); 
//        $stateMachine = $this->workflows->get($pullRequest, 'pull_request');
//        dump($stateMachine); die();
//        $stateMachine->apply($pullRequest, 'wait_for_review');

      //  die();
        return $this->render('work_flow/index.html.twig', [
                    'controller_name' => 'WorkFlowController',
                    'post'=>$blogPost
        ]);
    }

}
