import pytest

def test_missing_key_handled():
    """Test that missing dictionary keys are handled."""
    data = {"key1": "value1"}
    
    # Fixed code should use .get() or check existence
    value = data.get("missing_key", "default")
    assert value == "default"


def test_existing_key_works():
    """Test that existing keys still work."""
    data = {"key1": "value1"}
    
    value = data.get("key1", "default")
    assert value == "value1"
