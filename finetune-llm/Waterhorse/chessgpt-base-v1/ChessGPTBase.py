# source: https://huggingface.co/Waterhorse/chessgpt-base-v1
import torch
import transformers
from transformers import AutoTokenizer, AutoModelForCausalLM

MIN_TRANSFORMERS_VERSION = '4.25.1'

class ChessGPTBase:
    def __init__(self):
        # check transformers version
        assert transformers.__version__ >= MIN_TRANSFORMERS_VERSION, f'Please upgrade transformers to version {MIN_TRANSFORMERS_VERSION} or higher.'
        self.tokenizer = AutoTokenizer.from_pretrained("Waterhorse/chessgpt-base-v1")
        self.model = AutoModelForCausalLM.from_pretrained("Waterhorse/chessgpt-base-v1", torch_dtype=torch.float32)
        self.model = self.model.to("mps")

    def run_model(self, prompt: str):
        inputs = self.tokenizer(prompt, return_tensors='pt').to(self.model.device)
        input_length = inputs.input_ids.shape[1]
        outputs = self.model.generate(
            **inputs, max_new_tokens=128, do_sample=True, temperature=0.7, top_p=0.7, top_k=50, return_dict_in_generate=True, pad_token_id=self.tokenizer.eos_token_id)
        token = outputs.sequences[0, input_length:]
        output_str = self.tokenizer.decode(token)
        
        return output_str
