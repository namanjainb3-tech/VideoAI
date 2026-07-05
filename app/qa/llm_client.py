from abc import ABC, abstractmethod

class LLMClient(ABC):

    @abstractmethod
    def audit_batch(self, batch):
        pass