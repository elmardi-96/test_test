<?php 
namespace App\EventListener;

use App\Entity\TrTransaction;
use App\Controller\ApiController;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\HttpKernel\Event\TerminateEvent;

class ApiOutputListener {
    private $client;
    private $connection;
    private $entityManager;

    public function __construct(Connection $connection, HttpClientInterface $client, EntityManagerInterface  $entityManager)
    {
        $this->client = $client;
        $this->connection = $connection;
        $this->entityManager = $entityManager;
    }

    public function onKernelTerminate(TerminateEvent $event)
    {
        $request = $event->getRequest();
        if ($request->get('_route') === 'tr_transaction_Generer_multiple') {
            if(is_array($request->request->get('transactionsIds')) && count($request->request->get('transactionsIds')) > 0) {
                $api = new ApiController();
                foreach ($request->request->get('transactionsIds') as $key => $transactionId) {
                    $transaction = $this->entityManager->getRepository(TrTransaction::class)->find($transactionId);
                    // throw new \Exception($transaction->getOperation()->getPPiece()->getId());
                    if($transaction->getOperation()->getPPiece()->getId() == 67 and !in_array($transaction->getModePaiement()->getId(), [9, 10, 11, 12])) {
                        $api->api_output_rembourssement($transaction->getCodeBq(), $this->entityManager, $this->client, $this->connection, false);
                    }
                    elseif($transaction->getOperation()->getPPiece()->getId() == 28) {
                        $api->api_output_placement($transactionId, $this->connection, $this->entityManager, $this->client);
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 30) {
                        $api->api_output_rachat($transactionId, $this->connection, $this->entityManager, $this->client );        
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 33) {
                        $api->api_output_retrait($transactionId, $this->connection, $this->entityManager, $this->client);
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 32) {
                        $api->api_output_depot($transactionId, $this->connection, $this->entityManager, $this->client);
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 37) {
                        $api->api_output_eci($transactionId, $this->connection, $this->entityManager, $this->client);
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 39) {
                        $api->api_output_reci($transactionId, $this->connection, $this->entityManager, $this->client);
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 51) {
                        $api->api_output_avance($transactionId, $this->connection, $this->entityManager, $this->client);
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 50) {
                        $api->api_output_transfer_interne($transactionId, $this->connection,$this->entityManager, $this->client);
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 47) {
                        $api->api_output_transfer_externe($transactionId, $this->connection,$this->entityManager, $this->client);
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 48) {
                        $api->api_output_transfer_espece($transactionId, $this->connection, $this->entityManager, $this->client);
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 49) {
                        $api->api_output_alimentation($transactionId, $this->connection,$this->entityManager,  $this->client);
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 68) {
                        $api->api_output_gain($transaction->getId(), $this->connection,$this->entityManager,  $this->client, false);
                    } elseif($transaction->getOperation()->getPPiece()->getId() == 69) {
                        $api->api_output_perte($transaction->getId(), $this->connection,$this->entityManager,  $this->client, false);
                    } elseif(
                        in_array($transaction->getOperation()->getPPiece()->getId(), [38, 44, 45, 46]) or 
                        in_array($transaction->getModePaiement()->getId(), [9, 10, 11, 12])
                        
                    ){
                        $api->api_output_payement_indirect($transactionId, $this->connection,$this->entityManager, $this->client);
                    } else {
                        $api->api_output_transaction($transaction->getCodeBq(),$this->entityManager, $this->client, $this->connection);
                    }
                }
            }
        }

        return;
    }

   
}